SELECT A.name as nome, count(B.track_id) as reproducoes
FROM SpotifyClone.tracks A 
LEFT JOIN SpotifyClone.history B ON A.id = B.track_id
LEFT JOIN SpotifyClone.users C ON C.users_id = B.user_id
WHERE C.plan_id = 1 || C.plan_id = 3
GROUP BY A.id
ORDER BY reproducoes DESC, nome;