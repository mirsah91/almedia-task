import {BadRequestException, Injectable} from "@nestjs/common";

@Injectable()
export class HttpService {
    // imitate http call
    get<T = unknown>(data: T, rejectCall = false): Promise<T> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (rejectCall) {
                    return reject(new BadRequestException('Something went wrong!'));
                }

                return resolve(data);
            }, 2000)
        })
    }
}
