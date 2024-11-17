import { vi, describe, it, expect, beforeAll, afterEach } from 'vitest';
import { useScreenSize } from '../../src/hooks/useScreenSize.hook';
import { act, renderHook } from '@testing-library/react-hooks';

describe('Screen Size Hook', () => {
  beforeAll(() => {
    global.innerHeight = 768;
    global.innerWidth = 1024;
  });
  
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should return the initial window size', () => {
    const { result } = renderHook(() => useScreenSize());
    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  it('should update size on window resize', () => {
    const { result } = renderHook(() => useScreenSize());
 
    act(() => {
      global.innerWidth = 500;
      global.innerHeight = 500;
      window.dispatchEvent(new Event('resize'));
    });
 
    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  });
});
