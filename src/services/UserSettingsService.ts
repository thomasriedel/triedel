import type {UserSettings} from "@/types";
import type {UserSettingsRepository} from "@/adapter";

export class UserSettingsService {

    private readonly userSettingsRepo: UserSettingsRepository;

    public constructor(userSettingsRepo: UserSettingsRepository) {
        this.userSettingsRepo = userSettingsRepo;
    }

    public getUserSettings(): UserSettings {
        return this.userSettingsRepo.getUserSettings();
    }

    public setUserSettings(userSettings: UserSettings): void {
        this.userSettingsRepo.setUserSettings(userSettings);
    }

    public isDarkMode(): boolean {
        return this.userSettingsRepo.getUserSettings().darkMode;
    }

    public setDarkMode(isDarkMode: boolean): void {
        const settings = this.userSettingsRepo.getUserSettings();
        settings.darkMode = isDarkMode;
        this.userSettingsRepo.setUserSettings(settings);
        if (isDarkMode) document.body.classList.add('dark');
        else document.body.classList.remove('dark');
    }

}