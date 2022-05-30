/* eslint-disable no-underscore-dangle */
import axios from "axios";
import {EndpointApi} from "../../../constants";
import {getBaseUrlByEnvironment} from "../../../constants/api";
import {getData, setDataUser} from "../../../helpers";

export async function getLoginData(data: object) {
    const headers = {"Content-Type": "application/json"};
    const baseUrl = await getBaseUrlByEnvironment();
    const apiUrl = baseUrl + EndpointApi.login;
    const body = data;
    return new Promise<any>(resolve => {
        axios
            .post(apiUrl, body, {headers})
            .then(async (response: any) => {
                if (
                    response.data &&
                    response.data.data &&
                    response.data.statusCode === 200
                ) {
                    const userLogin = {
                        id: response.data.data?.data?._id,
                        token: response.data.data?.accessToken,
                        email: response.data.data?.data?.email,
                        name: response.data.data?.data?.name,
                        role: response.data.data?.data?.role,
                        phonenumber: response.data.data?.data?.phonenumber,
                        avatar: response.data.data?.data?.avatar,
                        gender: response.data.data?.data?.gender,
                        birthday: response.data.data?.data?.birthday,
                    };
                    resolve(userLogin);
                }
            })
            .catch(e => {
                if (e) {
                    resolve({error: "LOGIN ERROR"});
                }
            });
    });
}

export async function getLoginEmail(data: any) {
    const headers = {"Content-Type": "application/json"};
    const baseUrl = await getBaseUrlByEnvironment();
    const apiUrl = baseUrl + EndpointApi.loginEmail;
    const dataUser = await getData("dataUser");

    const dataParse = dataUser && JSON.parse(dataUser);

    return new Promise<any>((resolve, reject) => {
        axios
            .post(apiUrl, data, {headers})
            .then(async (res: any) => {
                const userLogin = {
                    studentNameEL: res.data.data?.data?.studentNameEL,
                    studentCode: res.data.data?.data?.studentCode,
                    avatar: res.data.data?.data?.avatar,
                    id: res.data.data?.data?._id,
                    gender: res.data.data?.data?.gender,
                };
                const found = dataParse?.find(
                    (element: any) =>
                        element?.studentCode === userLogin?.studentCode,
                );
                if (!found) {
                    const convertData = dataParse
                        ? JSON.stringify([...dataParse, userLogin])
                        : JSON.stringify([userLogin]);
                    setDataUser(convertData);
                }
                resolve(res.data);
            })
            .catch(e => {
                e && reject(e);
            });
    });
}
