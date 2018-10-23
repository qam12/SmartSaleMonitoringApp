
export class GlobalResources {
    public static StringFormat(value: Date): string {

        if (value !== null) {

            let stringDate = '';
            const d = value;
            const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
            ];

            stringDate += d.getDate() + ' '
            stringDate += MONTH_NAMES[d.getMonth()] + ', ';
            stringDate += d.getFullYear();
            return stringDate;

        } else {
            return '';
        }
    }

    public static removeDuplicatesValues(myArr, prop) {

        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }

    public static getDistinctObjectList(sourceArray, distinctFieldName, targetObjecttoFill) {

        const tmpDist = this.removeDuplicatesValues(sourceArray, distinctFieldName);

        tmpDist.map(val => {
          return {
            distName: val.DistributorTitle
            };
        });

    }
}
