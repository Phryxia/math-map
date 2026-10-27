# Kolmogorov–Arnold–Moser 정리

# 개요

**Kolmogorov–Arnold–Moser 정리(Kolmogorov–Arnold–Moser theorem)** 는 규칙적으로 도는 역학계에 작은 힘을 더해도 규칙적인 궤도 대부분이 모양만 조금 바뀐 채 남는다는 정리다. 태양 둘레를 도는 행성이 하나면 그 행성은 같은 타원을 끝없이 돈다. 행성이 둘이면 서로 당기는 작은 힘이 더해지고, 이 힘이 오랜 시간 쌓여 궤도를 무너뜨리는지가 문제다. 이 정리는 두 공전 진동수의 비가 유리수에서 충분히 멀면 궤도가 무너지지 않고 조금 변형된 채 계속됨을 증명한다.

# 직관

Kolmogorov–Arnold–Moser 정리는 [적분가능계](integrable-systems.md)에 작은 교란을 준 계에서 불변 원환면 대부분이 살아남는다는 정리다. 교란 전의 원환면 가운데 진동수가 정수벡터와 충분히 멀리 떨어진 것들이 살아남고, 그 합집합이 상태공간에서 차지하는 측도는 교란이 작아질 때 전체로 간다.

살아남는 조건은 진동수에 대한 [Diophantine 근사](diophantine-approximation.md)의 조건이고, 증명이 어려운 까닭은 교란을 없애는 좌표 바꾸기의 Fourier 계수에 작은 분모가 나오는 것이다.

적분가능계의 상태공간은 작용 변수로 매긴 원환면들로 쪼개지고, 각 원환면 위에서 운동은 진동수 $\nu(I)$ 의 등속 운동이다. 여기에 작은 교란을 더한 $H=H\_0(I)+\varepsilon H\_1(I,\theta)$ 에서도 원환면이 남는지 묻는다.

남는지 보려면 교란을 없애는 좌표 바꾸기를 찾으면 된다. 생성함수를 $S=I'\cdot\theta+\varepsilon\sigma(I',\theta)$ 로 두고 $\sigma$ 와 $H\_1$ 을 [Fourier 급수](fourier-series.md)로 적으면, 새 Hamilton 함수에서 $\theta$ 에 의존하는 항이 사라지는 조건은 각 정수벡터 $k\ne0$ 마다

$$
\hat\sigma(k)=\frac{\hat H\_1(k)}{i\thinspace k\cdot\nu}
$$

이다. 분모 $k\cdot\nu$ 가 $0$ 이면 이 계수가 정해지지 않고, $0$ 에 가까우면 계수가 커진다.

진동수에 정수관계가 없어도 분모는 작아진다. $k$ 를 크게 잡으면 $k\cdot\nu$ 를 얼마든지 $0$ 에 가깝게 만들 수 있기 때문이다. 그래서 분모가 작아지는 속도를 $\vert k\vert$ 의 거듭제곱으로 막는 조건을 건다. $H\_1$ 이 해석적이면 $\hat H\_1(k)$ 가 지수적으로 줄어들므로, 분모가 거듭제곱보다 느리게 줄면 급수가 수렴한다.

그 조건을 만족하는 진동수를 가진 작용 변수의 집합은 상태공간의 거의 전부를 차지한다. 그러므로 교란 뒤에도 원환면이 측도의 뜻에서 대부분 남는다.

# 정의

진동수벡터 $\nu\in\mathbb R^n$ 이 상수 $\gamma\gt 0$ 과 $\tau\gt n-1$ 에 대해

$$
\vert k\cdot\nu\vert\ge\frac{\gamma}{\vert k\vert^\tau}\qquad (k\in\mathbb Z^n\setminus\lbrace0\rbrace)
$$

을 만족하면 **Diophantine** 이라 하고, 이 조건을 만족하는 집합을 $D(\gamma,\tau)$ 라 쓴다. $\vert k\vert=\sum\_i\vert k\_i\vert$ 다.

적분가능계의 Hamilton 함수 $H\_0(I)$ 가

$$
\det\left(\frac{\partial^2H\_0}{\partial I\_i\partial I\_j}\right)\ne0
$$

을 만족하면 **Kolmogorov 비퇴화**라 한다. 이 조건에서 진동수 사상 $I\mapsto\nu(I)=\partial H\_0/\partial I$ 가 국소 미분동형이므로, 작용 변수를 진동수로 바꾸어 세는 것이 가능하다.

# 성질

## Kolmogorov–Arnold–Moser 정리

**Kolmogorov–Arnold–Moser 정리(Kolmogorov–Arnold–Moser theorem).** $H\_0$ 이 해석적이고 Kolmogorov 비퇴화이며 $H\_1$ 이 해석적이라 한다. $\gamma\gt 0$ 과 $\tau\gt n-1$ 을 고정하면, $\vert\varepsilon\vert$ 이 충분히 작을 때 $\nu(I)\in D(\gamma,\tau)$ 인 각 원환면에 대응하는 $H\_0+\varepsilon H\_1$ 의 불변 원환면이 있다. 그 원환면 위의 운동은 진동수 $\nu(I)$ 의 등속 운동이고, 원환면은 교란 전의 것에서 $\varepsilon$ 의 크기만큼 떨어져 있다.[^1]

살아남은 원환면들의 합집합의 여집합은 측도가 $\gamma$ 의 상수배 이하다. $\gamma$ 를 $\varepsilon$ 과 함께 $0$ 으로 보내면 합집합의 측도가 전체로 간다.

증명의 요지는 좌표 바꾸기를 한 번에 하지 않고 되풀이하는 것이다. 한 단계에서 교란의 Fourier 급수를 $\vert k\vert\le K$ 에서 끊어 없애면 남는 교란의 크기가 $\varepsilon$ 에서 $\varepsilon^2$ 의 상수배로 줄어든다. 작은 분모에서 나오는 상수는 $\gamma^{-1}$ 과 $K^\tau$ 의 거듭제곱으로 커지지만, 교란이 제곱으로 줄어드는 속도가 더 빨라 되풀이가 수렴한다. 각 단계에서 진동수를 고정하고 작용 변수를 옮기는 것이 Kolmogorov 비퇴화가 쓰이는 자리다. ∎

## Diophantine 진동수의 측도

**정리.** $\tau\gt n-1$ 이면 유계집합 $B\subset\mathbb R^n$ 에서 $D(\gamma,\tau)$ 의 여집합의 측도는 $\gamma$ 의 상수배 이하다.

$k$ 를 고정하면 $\vert k\cdot\nu\vert\lt\gamma\vert k\vert^{-\tau}$ 인 $\nu$ 는 두께가 $\gamma\vert k\vert^{-\tau-1}$ 의 상수배인 평판이므로, $B$ 안에서 그 측도가 $\gamma\vert k\vert^{-\tau-1}$ 의 상수배다. $k$ 에 대해 더하면 $\vert k\vert=m$ 인 정수벡터가 $m^{n-1}$ 의 상수배 개이므로 합이 $\gamma\sum\_m m^{n-1-\tau-1}$ 의 상수배이고, $\tau\gt n-1$ 에서 이 급수가 수렴한다. ∎

$n=1$ 에서는 $\tau\gt 0$ 이고, 조건은 무리수의 연분수 전개가 유계 몫을 갖는다는 성질과 이어진다.

## 자유도 2 의 작용 변수 유계성

**정리.** 자유도가 $2$ 이면 살아남은 원환면이 각 에너지면을 조각으로 가르므로, 두 원환면 사이에서 출발한 궤도의 작용 변수는 모든 시간에 유계로 남는다.

에너지면은 $3$ 차원이고 불변 원환면은 $2$ 차원이므로 원환면이 에너지면을 분리한다. 궤도는 불변집합을 넘지 못하므로 두 원환면 사이에 갇힌다. ∎

자유도가 $3$ 이상이면 에너지면의 차원이 $2n-1$ 이고 원환면의 차원이 $n$ 이어서 분리하지 못한다. 이 경우 작용 변수의 변화에 대해서는 [Nekhoroshev 추정](nekhoroshev-estimate.md)이 지수적으로 긴 시간 동안의 상한을 준다.[^2]

# 활용

- [적분가능계](integrable-systems.md)가 교란에 대해 얼마나 견디는지를 재는 정리다. 적분가능계는 보존량이 자유도만큼 있어야 하므로 조건이 까다롭지만, 이 정리가 그 조건을 약간 벗어난 계에서도 원환면 구조가 남는다고 말한다.
- [Diophantine 근사](diophantine-approximation.md)의 조건이 역학계의 안정성 조건으로 쓰이는 자리다. 유리수로 잘 근사되는 진동수가 먼저 깨지므로, 근사의 질이 원환면의 운명을 가른다.
- [연분수](continued-fractions.md)의 유계 몫 조건이 자유도 $2$ 의 황금비 진동수를 가장 견디는 경우로 만든다. 연분수 전개의 몫이 모두 $1$ 인 수가 Diophantine 조건을 가장 큰 $\gamma$ 로 만족한다.
- 교란 전개를 항별로 계산할 때 작은 분모가 어디서 나오는지 알려 주므로, 수치 적분에서 공명 근방을 따로 다루는 근거가 된다.

[^1]: Jürgen Pöschel, "A lecture on the classical KAM theorem", *Proceedings of Symposia in Pure Mathematics* 69 (2001), 707-732. 정리의 진술, 되풀이 좌표변환의 수렴, 측도 추정을 다룬다.
[^2]: V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2판, Springer Graduate Texts in Mathematics 60 (1989), 부록 8. 교란에서 원환면이 살아남는 조건과 자유도에 따른 차이를 다룬다.

# 연관 문서

## 선수지식

- [적분가능계](integrable-systems.md)
- [Diophantine 근사](diophantine-approximation.md)

## 더 알아보기

- [Nekhoroshev 추정](nekhoroshev-estimate.md)

#differential_geometry #analysis #number_theory
