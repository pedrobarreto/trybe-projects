SELECT B.name as artista, A.name as album
FROM SpotifyClone.album A 
LEFT JOIN SpotifyClone.artist B ON A.artist_id = B.id
GROUP BY A.id
HAVING B.name = 'Walter Phoenix'
ORDER BY A.name ASC;