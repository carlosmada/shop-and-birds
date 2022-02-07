import { response } from 'express';

export const shop = async( req: any, res = response ) => {

    const { budget, keyboards, drives } = req.body;

	const concat_array: [] = await shopArrayConcat(keyboards, drives, budget);

	const filter = concat_array.filter((d:any) => d.amount <= budget);

	const array_orderByAmount = await orderDescByProp(filter, 'amount');
	const selected = array_orderByAmount.find((d:any) => d.amount <= budget);

	if (!selected) {
		return res.json({ output: -1 });
	}

    return res.json({ output: selected.amount });
}

const orderDescByProp = async(array:any, prop:any) => {
	await array.sort(((a:any, b:any) => b[prop] - a[prop]));
	return array;
}

const shopArrayConcat = async(keyboards:[], drives:[], budget: number) => {

	let arrayOne: [] = [], arrayTwo: [] = [], array_selected = 'keyboards';

	if (keyboards.length > drives.length) {
		arrayOne = keyboards;
		arrayTwo = drives;
	} else {
		arrayOne = drives;
		arrayTwo = keyboards;
        array_selected = 'drives';
	}    

    let concat_array: any = [];

	arrayOne.forEach((item: any) => {

		arrayTwo.forEach((item2:any) => {
			const amount = item + item2;
            let keyboard = 0, usb = 0;
            if( array_selected === 'keyboards'){
                keyboard = item;
                usb = item2;
            } else {
                usb = item;
                keyboard = item2;
            }
			const data = {
				keyboard,
				usb,
				amount,
				budget
			}
			concat_array.unshift(data);
		});
	});
    return concat_array;
}