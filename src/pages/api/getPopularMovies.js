import axios from "axios";

export default async function handler(req, res) {
    try {
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`);
        res.status(200).json(response.data);
        console.log('バックエンド結果：',response.data);
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: 'サーバー側でエラーが発生しました'})
    }
}