SELECT distinct A.name as cancao,
count(track_id) as reproducoes
FROM SpotifyClone.tracks A 
LEFT JOIN SpotifyClone.history B ON A.id = B.track_id
GROUP BY A.name
HAVING reproducoes >= 2
ORDER BY cancao asc
LIMIT 2;