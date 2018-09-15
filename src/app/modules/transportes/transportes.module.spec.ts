import { TransportesModule } from './transportes.module';

describe('TransportesModule', () => {
  let transportesModule: TransportesModule;

  beforeEach(() => {
    transportesModule = new TransportesModule();
  });

  it('should create an instance', () => {
    expect(transportesModule).toBeTruthy();
  });
});
