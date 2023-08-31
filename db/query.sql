SELECT music.music_name AS music, credits.credit
FROM reviews
LEFT JOIN music
ON reviews.music_id = music.id
ORDER BY music.music_name;
