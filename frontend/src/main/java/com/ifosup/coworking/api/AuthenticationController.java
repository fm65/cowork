package com.ifosup.coworking.api;

import com.ifosup.coworking.CoworkingProperties;
import com.ifosup.coworking.dto.CredentialsDto;
import com.ifosup.coworking.dto.RegistrationDto;
import com.ifosup.coworking.repository.UserRepository;
import com.ifosup.coworking.security.jwt.JWTConfigurer;
import com.ifosup.coworking.security.jwt.TokenProvider;
import com.ifosup.coworking.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Collections;

@RestController
@RequestMapping("api")
public class AuthenticationController {

    private final Logger log = LoggerFactory.getLogger(AuthenticationController.class);

    private final UserService userService;

    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;

    private final TokenProvider tokenProvider;

    private final CoworkingProperties coworkingProperties;

    public AuthenticationController(UserService userService, UserRepository userRepository, AuthenticationManager authenticationManager, TokenProvider tokenProvider, CoworkingProperties coworkingProperties) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
        this.coworkingProperties = coworkingProperties;
    }

    @PostMapping("register")
    public ResponseEntity register(@RequestBody @Valid RegistrationDto registrationDto, HttpServletResponse response) {
        log.debug("REST Request to register user {}", registrationDto.email);
        if (registrationDto.password.length() < coworkingProperties.getSecurity().getMinPasswordLength()) {
            return new ResponseEntity<>("Password length should be at least " + coworkingProperties.getSecurity().getMinPasswordLength(), HttpStatus.BAD_REQUEST);
        }

        if (userRepository.findOneByEmail(registrationDto.email.toLowerCase()).isPresent()) {
            return new ResponseEntity<>("email already in use", HttpStatus.BAD_REQUEST);
        }

        userService.registerNewUser(registrationDto);
        setAuthorization(registrationDto.email, registrationDto.password, registrationDto.rememberMe, response);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("authenticate")
    public ResponseEntity authenticate(@RequestBody @Valid CredentialsDto credentialsDto, HttpServletResponse response) {
        log.debug("REST Request to authenticate user {}", credentialsDto.email);
        try {
            setAuthorization(credentialsDto.email, credentialsDto.password, credentialsDto.rememberMe, response);

            return ResponseEntity.noContent().build();
        } catch (AuthenticationException e) {
            log.trace("Authentication exception trace: {}", e);
            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException",
                e.getLocalizedMessage()), HttpStatus.UNAUTHORIZED);
        }
    }

    private void setAuthorization(String email, String password, Boolean rememberMe, HttpServletResponse response) {
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(email, password);

        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        boolean resolvedRememberMe = false;
        if (rememberMe != null) {
            resolvedRememberMe = rememberMe;
        }

        String jwt = tokenProvider.createToken(authentication, resolvedRememberMe);
        response.addHeader(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer " + jwt);
    }
}
