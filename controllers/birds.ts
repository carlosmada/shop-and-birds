import { response } from 'express';

export const birds = async( req: any, res = response ) => {
    
    const { population } = req.body;

	const popular_bird_id = await getPopularBirdId( population );

	return res.json({ output: popular_bird_id});
}

const getPopularBirdId = async( population: []) => {

    let repeats:any = {};
	population.forEach((number:number) => {
		repeats[number] = (repeats[number] || 0) + 1;
	});

	const values = Object.values(repeats);
	const keys = Object.keys(repeats);
	const duplicates_obj = [];
	for (let i = 0; i < keys.length; i++) {
		const number = Number(values[i]);
		const data = {
			bird_id: keys[i],
			duplicates: number
		}
		duplicates_obj.unshift(data);
	}

	const max = Math.max.apply(Math, duplicates_obj.map(function (o) {
		return o.duplicates;
	}));
	const filter_max = duplicates_obj.filter(value => value.duplicates === max);

	const search = filter_max.reduce((acc:any, bird) => {
		acc[bird.duplicates] = ++acc[bird.duplicates] || 0;
		return acc;
	}, {});

	if (filter_max.length === 1) {
		const popular_bird_id = Math.min.apply(Math, filter_max.map(function (o:any) {
			return o.bird_id;
		}));
        return popular_bird_id;
	}

	const duplicates = filter_max.filter((bird) => {
		return search[bird.duplicates];
	});

	const popular_bird_id = Math.min.apply(Math, duplicates.map(function (o:any) {
		return o.bird_id;
	}));
    
    return popular_bird_id;
}