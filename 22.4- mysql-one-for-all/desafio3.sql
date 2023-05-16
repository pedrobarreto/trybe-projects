SELECT A.name as usuario, count(track_id) as qtde_musicas_ouvidas, round(sum(duration/60),2) as total_minutos
FROM SpotifyClone.users A 
LEFT JOIN SpotifyClone.history B ON A.users_id = B.user_id
LEFT JOIN SpotifyClone.tracks C ON C.id = B.track_id
GROUP BY A.users_id
ORDER BY A.name ASC;