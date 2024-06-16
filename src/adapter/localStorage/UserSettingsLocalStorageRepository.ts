import type {UserSettingsRepository} from "@/adapter";
import type {UserSettings} from "@/types";

export class UserSettingsLocalStorageRepository implements UserSettingsRepository {

    private readonly LOCAL_STORAGE_KEY: string = 'triedel_user_settings';

    public getUserSettings(): UserSettings {
        const persistedValue = localStorage.getItem(this.LOCAL_STORAGE_KEY);
        if (!persistedValue) return this.getDefaultUserSettings();

        const parsed: UserSettings = JSON.parse(persistedValue);
        return this.migrate(parsed);
    }

    public setUserSettings(userSettings: UserSettings) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.migrate(userSettings)));
    }

    private migrate(userSettings: UserSettings): UserSettings {
        return Object.assign(this.getDefaultUserSettings(), userSettings);
    }

    private getDefaultUserSettings(): UserSettings {
        return {
            darkMode: false,
        }
    }

}