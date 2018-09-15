import { ArticulosModule } from './articulos.module';

describe('ArticulosModule', () => {
  let articulosModule: ArticulosModule;

  beforeEach(() => {
    articulosModule = new ArticulosModule();
  });

  it('should create an instance', () => {
    expect(articulosModule).toBeTruthy();
  });
});
