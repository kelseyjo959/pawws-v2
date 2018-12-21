export const index = (req, res) => {
	res.status(200).send({ status: 200, message: 'Your server works' });
};
export default index;
