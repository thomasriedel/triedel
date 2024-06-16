import {UserSettingsService} from "@/services";
import {UserSettingsLocalStorageRepository} from "@/adapter/localStorage/UserSettingsLocalStorageRepository";

export class Core {

    public static userSettingsService: UserSettingsService;

    public static init() {
        this.userSettingsService = new UserSettingsService(new UserSettingsLocalStorageRepository());
    }

}