const url = process.env.REACT_APP_BE_URL;

export const getFunction = async (endp) => {
  try {
    console.log(localStorage.getItem("token"));
    const response = await fetch(url + endp, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
export const postFunctionImage = async (endp, data) => {
  try {
    const response = await fetch(url + endp, {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};
export const postFunction = async (endp, data) => {
  try {
    const response = await fetch(url + endp, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return response.status === 400 ? await response.text() : await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};

export const putFunction = async (endp, data) => {
  try {
    const response = await fetch(url + endp, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    } else {
      return response.status === 400 ? await response.json() : await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteFunction = async (endp) => {
  try {
    const response = await fetch(url + endp, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "DELETE",
    });
    if (response.ok) {
      return await response.text();
    } else {
      console.log(await response.text());
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
