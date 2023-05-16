SELECT B.name as artista, A.name as album, count(C.artist_id) as seguidores
FROM SpotifyClone.album A 
LEFT JOIN SpotifyClone.artist B ON A.artist_id = B.id
LEFT JOIN SpotifyClone.fav_artists C ON C.artist_id = B.id
GROUP BY A.id
ORDER BY seguidores DESC, artista, album;