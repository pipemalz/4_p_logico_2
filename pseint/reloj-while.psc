Algoritmo relojwhile
	m <- 0
	s <- 0
	h <- 0
	Mientras  h < 24 Hacer
			m <- 0
			Mientras m < 60 Hacer
				s <- 0
				Mientras s<60 Hacer
					Escribir ' m: ', m, ' s: ', s, ' h: ', h
					s <- s+1
				FinMientras
				m <- m + 1
			FinMientras
			h <- h + 1
		FinMientras
FinAlgoritmo
