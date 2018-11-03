export interface Task {
    Id: number;
    UserId: number;
    Name: string;
    Description: string;
    StartDate: Date;
    EndDate: Date;
    IsCompleted: boolean;
}
