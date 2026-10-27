# Bogomolny–Schmit 추측

# 개요

**Bogomolny–Schmit 추측(Bogomolny–Schmit conjecture)** 은 혼돈적인 모양의 북이 떨릴 때 움직이지 않는 선이 나누는 조각의 수를 예측하는 추측이다. 정사각형 북의 진동 $\sin(mx)\sin(ly)$ 는 움직이지 않는 선이 가로세로 격자를 이뤄 조각이 $ml$ 개로 규칙적이지만, 경기장 모양처럼 벽에 반사되는 공의 경로가 혼돈적인 영역에서는 이 선이 불규칙하게 얽힌다. 이 추측은 그런 영역의 진동을 무작위 파동으로 보고 조각을 격자 위 무작위 연결 모형의 덩어리로 세어, $k$ 번째 진동의 조각 수 $\nu_k$ 가 $\nu_k/k\to(3\sqrt 3-5)/\pi\approx 0.0624$ 를 따른다고 예측한다.

# 직관

Bogomolny–Schmit 추측은 혼돈적인 평면 영역의 고유함수가 갖는 마디 영역의 개수가 임계 결합 침투의 클러스터 개수로 정해진다는 추측이다. E. Bogomolny 와 C. Schmit 이 2002 년에 제시했고, $k$ 번째 고유함수의 마디 영역 개수 $\nu_k$ 에 대해 $\nu_k/k\to(3\sqrt 3-5)/\pi\approx 0.0624$ 를 예측한다[^1].

[Courant 마디 영역 정리](courant-nodal-domain-theorem.md)와 Pleijel 정리는 $\nu_k/k$ 의 상한만 준다. 이 추측은 측지선 흐름이 혼돈적인 경우에 [양자 혼돈](quantum-chaos.md)의 무작위 파동 모형에서 그 비의 값을 정한다.

Pleijel 정리로 평면에서 $\nu_k/k$ 는 $k$ 가 클 때 $0.692$ 이하이고, 정사각형의 고유함수 $\sin(mx)\sin(ly)$ 는 이 비가 $2/\pi$ 근처까지 간다. 정사각형의 마디선은 가로선과 세로선이 교차하는 격자이고, 직사각형 조각마다 부호가 바둑판처럼 번갈아 나온다.

이 고유함수에 작은 함수를 더하면 교차점마다 $0$ 이 되는 곡선이 갈라진다. 교차점에서 만나는 네 조각은 양, 음, 양, 음 순서이고, 갈라진 뒤에는 마주 보는 두 양의 조각이 이어지거나 두 음의 조각이 이어진다. 둘 가운데 어느 쪽인지는 더한 함수의 그 점에서의 부호가 정한다.

혼돈적인 영역의 고유함수는 이 두 경우가 교차점마다 확률 $1/2$ 로 서로 무관하게 일어나는 것처럼 보인다. 양의 조각을 점으로, 두 양의 조각이 이어진 교차점을 열린 변으로 놓으면 양의 마디 영역은 정사각격자에서 각 변이 확률 $1/2$ 로 열린 [침투](percolation.md)의 클러스터다. 음의 마디 영역은 쌍대격자에서 같은 침투의 클러스터다. 마디 영역의 개수는 이 두 침투의 클러스터 개수의 합이다.

# 정의

## 무작위 평면파

**무작위 평면파(random plane wave)** 는 $\Delta u+u=0$ 을 만족하는 평면의 정상 Gauss 무작위장으로, 공분산이 $\mathbb E\thinspace u(x)u(y)=J_0(\vert x-y\vert)$ 다. $J_0$ 은 0 차 [Bessel 함수](bessel-functions.md)다. Berry 의 무작위 파동 추측(Berry's random wave conjecture)은 혼돈적인 영역의 고유함수를 파장 척도로 확대하면 국소적으로 무작위 평면파처럼 보인다는 진술이다[^2].

## 침투 모형

정사각격자의 각 변을 확률 $1/2$ 로 서로 무관하게 열고, 원래 격자의 클러스터와 쌍대격자의 클러스터를 모두 센다. 이 수를 격자의 점 수로 나눈 값의 극한이 $3\sqrt 3-5$ 다. 격자 간격을 무작위 평면파의 마디선 교차점 밀도에 맞추고 [Weyl 법칙](weyl-law.md)으로 $k$ 에 대한 비로 옮긴 것이 다음 진술이다.

$$
\lim_{k\to\infty}\frac{\nu_k}{k}=\frac{3\sqrt 3-5}{\pi}\approx 0.0624
$$

같은 모형으로 Bogomolny 와 Schmit 은 분산이 $\big(18/\pi^2+4\sqrt 3/\pi-25/(2\pi)\big)k\approx 0.0502\thinspace k$ 라고 예측했고, 넓이가 $s$ 인 마디 영역의 개수가 임계 침투 클러스터의 크기 분포와 같이 $s^{-187/91}$ 에 비례한다고 예측했다[^1].

# 성질

## Nazarov–Sodin 정리

**Nazarov–Sodin 정리(Nazarov–Sodin theorem)** 는 무작위 구면조화함수의 마디 영역 개수가 차수의 제곱에 비례한다는 정리다. 차수 $n$ 의 무작위 [구면조화함수](spherical-harmonics.md)에 대해 양의 상수 $a$ 가 있어, 마디 영역의 개수를 $N_n$ 이라 하면 모든 $\varepsilon\gt 0$ 에 대해 $\vert N_n/n^2-a\vert\gt\varepsilon$ 일 확률이 $n$ 에 대해 지수적으로 작다[^3]. 증명은 반지름이 $R/n$ 인 원판 안에 완전히 들어가는 마디 영역을 세고, 그 개수를 구면 전체에서 평균해 $N_n$ 을 위아래로 막는다. 이 증명은 $a$ 의 값을 주지 않는다.

## 상수의 수치

Nazarov–Sodin 정리의 상수를 무작위 평면파의 정규화로 옮겨 수치로 계산하면 약 $0.0589$ 가 나오고, Bogomolny–Schmit 추측의 $0.0624$ 와 몇 퍼센트 차이가 난다[^4].

# 활용

- [Courant 마디 영역 정리](courant-nodal-domain-theorem.md)의 Pleijel 상한 $0.692$ 와 견주면, 혼돈적인 영역의 고유함수는 마디 영역을 상한의 약 $1/10$ 만 갖는다.
- Blum, Gnutzmann, Smilansky 는 마디 영역 개수의 분포로 적분가능한 계와 혼돈적인 계를 가르는 기준을 제안했다[^6]. 혼돈적인 쪽의 기준값이 이 추측의 평균과 분산이다.
- 마디선의 연결 구조를 임계 침투로 옮기므로, 큰 마디 영역의 경계가 SLE(Schramm–Loewner evolution)의 매개변수 $6$ 인 곡선처럼 보인다는 예측이 같은 모형에서 나온다[^5].

[^1]: E. Bogomolny, C. Schmit, "Percolation model for nodal domains of chaotic wave functions", Physical Review Letters 88 (2002), 114102.
[^2]: M. V. Berry, "Regular and irregular semiclassical wavefunctions", Journal of Physics A 10 (1977), 2083–2091.
[^3]: F. Nazarov, M. Sodin, "On the number of nodal domains of random spherical harmonics", American Journal of Mathematics 131 (2009), 1337–1357.
[^4]: D. Beliaev, Z. Kereta, "On the Bogomolny–Schmit conjecture", Journal of Physics A 46 (2013), 455003.
[^5]: E. Bogomolny, R. Dubertrand, C. Schmit, "SLE description of the nodal lines of random wavefunctions", Journal of Physics A 40 (2007), 381–395.
[^6]: G. Blum, S. Gnutzmann, U. Smilansky, "Nodal domains statistics: a criterion for quantum chaos", Physical Review Letters 88 (2002), 114101.

# 연관 문서

## 선수지식

- [Courant 마디 영역 정리](courant-nodal-domain-theorem.md)
- [양자 혼돈](quantum-chaos.md)
- [침투](percolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #probability #analysis
