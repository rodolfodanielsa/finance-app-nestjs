import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto'
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('user')
export class UserController {
    constructor(private blogService: UserService) { }

    @Get('list')
    async getUsers(@Res() res) {
        const users = await this.blogService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:userID')
    async getUser(@Res() res, @Param('userID', new ValidateObjectId()) userID) {
        const user = await this.blogService.getUser(userID);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json(user);

    }

    @Post('/create')
    async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        const newUser = await this.blogService.addUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: "User has been submitted successfully!",
            user: newUser
        })
    }

    @Put('/edit')
    async editUser(
        @Res() res,
        @Query('userID', new ValidateObjectId()) userID,
        @Body() createUserDTO: CreateUserDTO
    ) {
        const editedUser = await this.blogService.editUser(userID, createUserDTO);
        if (!editedUser) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user: editedUser
        })
    }

    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID', new ValidateObjectId()) userID) {
        const deletedUser = await this.blogService.deleteUser(userID);
        if (!deletedUser) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted!',
            user: deletedUser
        })
    }
}
