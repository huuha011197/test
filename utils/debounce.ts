export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  } as T; 
}