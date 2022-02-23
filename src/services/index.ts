export const API_URL = "http://evtmng.com/json";

export function TOKEN_POST(body: any) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function USER_GET() {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function USER_POST(body: any) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_PUT(id: number, body: any) {
  return {
    url: `${API_URL}/api/user/${id}`,
    options: {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body,
    },
  };
}

export function EVENT_POST(formData: any) {
  return {
    url: API_URL + "/api/event",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: formData,
    },
  };
}

export function EVENT_PUT(id: number, body: any) {
  return {
    url: `${API_URL}/api/event/${id}`,
    options: {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body,
    },
  };
}

export function EVENT_GET() {
  return {
    url: `${API_URL}/api/event`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function SUBSCRIBE_POST(formData: any) {
  return {
    url: API_URL + "/api/subscribe",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: formData,
    },
  };
}

export function SUBSCRIBE_GET() {
  return {
    url: `${API_URL}/api/subscribes`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function SUBSCRIBE_PUT(id: number, body: any) {
  return {
    url: `${API_URL}/api/subscribe/${id}`,
    options: {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body,
    },
  };
}

export function EVENT_DELETE(id: number) {
  return {
    url: `${API_URL}/api/event/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function SUBSCRIBE_DELETE(id: number) {
  return {
    url: `${API_URL}/api/subscribe/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
