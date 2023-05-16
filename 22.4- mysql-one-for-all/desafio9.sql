SELECT count(track_id) as quantidade_musicas_no_historico
FROM SpotifyClone.history A 
LEFT JOIN SpotifyClone.users B ON A.user_id = B.users_id
WHERE B.name = 'Bill'
