export const configBackend: string = process.env
  .REACT_APP_CONFIGURATION_BACKEND as string;

export function createEventEndpoint(event: any): Promise<any> {
  return fetch(`/api/form`).then(handleResponse);
}

function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}
