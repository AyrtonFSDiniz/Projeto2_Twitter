import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosOnUsuarioController } from './favoritos-on-usuario.controller';
import { FavoritosOnUsuarioService } from './favoritos-on-usuario.service';

describe('FavoritosOnUsuarioController', () => {
  let controller: FavoritosOnUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritosOnUsuarioController],
      providers: [FavoritosOnUsuarioService],
    }).compile();

    controller = module.get<FavoritosOnUsuarioController>(FavoritosOnUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
