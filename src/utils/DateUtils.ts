export class DateUtils {

    public static formatDate(date: Date): string {
        const year = date.getFullYear();

        let month = `${date.getMonth() + 1}`;
        month = month.length === 1 ? `0${month}` : `${month}`;

        let day = `${date.getDate()}`;
        day = day.length === 1 ? `0${day}` : `${day}`;

        return `${day}.${month}.${year}`;
    }

}