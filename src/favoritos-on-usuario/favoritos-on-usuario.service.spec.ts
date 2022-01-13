import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosOnUsuarioService } from './favoritos-on-usuario.service';

describe('FavoritosOnUsuarioService', () => {
  let service: FavoritosOnUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritosOnUsuarioService],
    }).compile();

    service = module.get<FavoritosOnUsuarioService>(FavoritosOnUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
