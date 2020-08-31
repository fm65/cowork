import { SpaceModel } from './space.model';
import { UserModel } from './user.model';
import { RoomModel } from './room.model';
import { OrderedEquipmentModel } from './orderedEquipment.model';
import { OrderedServiceModel } from './orderedService.model';

export interface ReservationModel {
    id: number;
    startDate: Date;
    endDate: Date;
    participants: number;
    totalPrice: number;
    userId: UserModel;
    roomId: RoomModel;
}
