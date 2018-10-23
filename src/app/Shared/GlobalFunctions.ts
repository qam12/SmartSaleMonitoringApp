
export class GlobalResources {
    // date formater by simple Date
    public static StringFormat(value: Date): string {

        if (value !== null) {

            let stringDate = '';
            const d = value;
            const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
            ];

            // if (d.getDate() === 1 || d.getDate() === 21 || d.getDate() === 31) {
            //     stringDate += d.getDate() + 'st ';
            // } else if (d.getDate() === 2 || d.getDate() === 22) {
            //     stringDate += d.getDate() + 'nd ';
            // } else if (d.getDate() === 3 || d.getDate() === 23) {
            //     stringDate += d.getDate() + 'rd ';
            // } else {
            //     stringDate += d.getDate() + 'th ';
            // }
            stringDate += d.getDate() + ' '
            stringDate += MONTH_NAMES[d.getMonth()] + ', ';
            stringDate += d.getFullYear();

            // this.searchCriteria.pickupDate = d.month + '/' + d.day + '/' + d.year;

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
