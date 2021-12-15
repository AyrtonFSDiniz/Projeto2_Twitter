import { PartialType } from '@nestjs/swagger';
import { CreatePrimaDto } from './create-prima.dto';

export class UpdatePrimaDto extends PartialType(CreatePrimaDto) {}
