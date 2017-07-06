import { DonePipe } from './done.pipe';

describe('DonePipe', () => {
  it('create an instance', () => {
    const pipe = new DonePipe();
    expect(pipe).toBeTruthy();
  });

  it('should display well done when a todo item is done', () => {
    const done = true;
    const result = new DonePipe().transform(done);
    expect(result).toBe('Well Done !!!');
  });
});
