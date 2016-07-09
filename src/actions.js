export function startSpinner() {
  return { type: 'START_SPINNER' };
}

export function stopSpinner() {
  return { type: 'STOP_SPINNER' };
}

export function setLoaded(name, result) {
  return { type: 'SET_LOADED', name, result };
}

export function setList(list) {
  return { type: 'SET_LIST', list };
}
