import type {UserSettings} from "@/types";

export interface UserSettingsRepository {
    getUserSettings(): UserSettings;
    setUserSettings(userSettings: UserSettings): void;
}