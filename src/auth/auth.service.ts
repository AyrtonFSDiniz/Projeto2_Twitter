/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
	constructor(private readonly usuarioService: UsuarioService) {}

	async login( loginUserDto: LoginDto){
		const user = await this.usuarioService.findByLogin(loginUserDto);

        return
	}
}