import Stripe from 'stripe';
// @ts-ignore
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
	if (req.method === 'POST') {
		console.log(req.body);
		const game: IGame = req.body;
		try {
			// Create Checkout Sessions from body params.
			const params = {
				submit_type: 'pay',
				line_items: [
					{
						price_data: {
							currency: 'usd',
							product_data: {
								name: game?.TeamOne?.title + ' vs ' + game?.TeamTwo?.title,
							},
							unit_amount: game.price * 100,
						},
						adjustable_quantity: {
							enabled: false,
						},
						quantity: 1,
					},
				],
				shipping_options: [
					{ shipping_rate: 'shr_1NKmJTJHROrem9Du5JnITOL6' },
					{ shipping_rate: 'shr_1NKmLEJHROrem9DufvFV41OO' },
				],
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
				success_url: `${req.headers.origin}/?success=true`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			};
			// @ts-ignore
			const session = await stripe.checkout.sessions.create(params);
			res.status(200).json(session);
		} catch (err: any) {
			console.log({ err });
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
