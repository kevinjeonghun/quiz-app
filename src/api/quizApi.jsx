export const fetchQuiz = async () => {
    // Cek apakah data quiz sudah ada di localStorage
    const cachedQuiz = localStorage.getItem('quizData');
    
        if (cachedQuiz) {
        console.log('Using data from cache');
        return JSON.parse(cachedQuiz); // Gunakan data dari localStorage jika ada
        }
    
        // Jika tidak ada di localStorage, lakukan fetch dari API
        const url = 'https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple';
        try {
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`); // Tangani error dari response API
        }
    
        const data = await response.json();
    
        // Simpan data quiz ke localStorage
        localStorage.setItem('quizData', JSON.stringify(data.results));
    
        return data.results; // Return data yang telah di-fetch
        } catch (error) {
        console.error("Error fetching quiz data:", error);
        return []; // Jika fetch gagal, return array kosong
        }
    };