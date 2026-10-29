# Furstenberg 다중 되돌이 정리

# 개요

**Furstenberg 다중 되돌이 정리(Furstenberg multiple recurrence theorem)** 는 넓이를 지키며 점들을 옮기는 변환을 되풀이할 때, 넓이가 양수인 집합에서 출발해 같은 간격으로 여러 번 그 집합에 다시 들어오는 점이 있다는 정리다. 원을 각 $\alpha$ 만큼 돌리는 변환에서 호 $E$ 를 잡으면, 어떤 $n\ge 1$ 에 대해 $x$, $x+n\alpha$, $x+2n\alpha$ 가 모두 $E$ 에 드는 점 $x$ 가 있다. 이 정리를 정수 집합으로 옮기면, 밀도가 양수인 정수 집합이 임의로 긴 등차수열을 포함한다는 [Szemerédi 정리](szemeredi-theorem.md)가 증명된다.

# 직관

Furstenberg 다중 되돌이 정리는 확률공간의 측도보존변환 $T$ 와 측도가 양수인 집합 $E$, 정수 $k\ge 1$ 에 대해

$$
\mu\big(E\cap T^{-n}E\cap T^{-2n}E\cap\cdots\cap T^{-kn}E\big)\gt 0
$$

인 $n\ge 1$ 이 존재한다는 정리다. H. Furstenberg 가 1977 년에 증명했고, 정수 집합을 측도보존계로 옮기는 대응 원리와 합쳐 Szemerédi 정리의 두 번째 증명이 되었다[^1].

양의 정수의 집합 $A$ 가 세 수짜리 등차수열 $a,a+n,a+2n$ 을 포함한다는 것은 $a$ 가 $A$, $A-n$, $A-2n$ 에 동시에 속한다는 것이다. 수 전체를 $1$ 씩 미는 이동을 $T$ 라 하면 $A-n$ 은 $A$ 를 $n$ 번 민 집합이다. 그러면 질문은 "집합을 $n$ 번, $2n$ 번 민 것이 원래 집합과 함께 겹치는 $n$ 이 있는가" 가 된다.

미는 횟수가 한 번만 들어가면 [비둘기집 원리](pigeonhole-principle.md)로 답이 나온다. 전체 측도가 $1$ 인 공간에서 측도 $\mu(E)\gt 0$ 인 집합 $E$ 와 그것을 민 집합 $T^{-1}E,T^{-2}E,\dots$ 는 모두 측도가 $\mu(E)$ 이다. $1/\mu(E)$ 개보다 많이 모으면 서로 겹치지 않을 수 없으므로 어떤 $i\lt j$ 에서 $T^{-i}E\cap T^{-j}E$ 의 측도가 양수다. $T$ 가 측도를 보존하므로 $n=j-i$ 에서 $\mu(E\cap T^{-n}E)\gt 0$ 이다.

세 집합 $E$, $T^{-n}E$, $T^{-2n}E$ 가 함께 겹쳐야 하면 이 논증이 통하지 않는다. 비둘기집 원리가 주는 것은 겹치는 두 집합이지, 간격이 같은 세 집합이 아니다. 이 정리는 간격이 같은 $k+1$ 개 집합이 함께 겹치는 $n$ 이 있다는 것이고, 그 증명은 변환의 구조를 갈라서 진행한다.

# 정의

$(X,\mathcal B,\mu)$ 가 확률공간이고 $T:X\to X$ 가 [에르고딕 정리](ergodic-theorem.md)의 측도보존변환일 때 네 쌍 $(X,\mathcal B,\mu,T)$ 를 **측도보존계(measure-preserving system)** 라 한다.

$T$ 가 다중 되돌이를 만족한다는 것은 모든 $k\ge 1$ 과 $\mu(E)\gt 0$ 인 모든 $E\in\mathcal B$ 에서

$$
\liminf_{N\to\infty}\frac1N\sum_{n=1}^{N}\mu\big(E\cap T^{-n}E\cap\cdots\cap T^{-kn}E\big)\gt 0
$$

이라는 뜻이다. 이 정리는 모든 측도보존계가 다중 되돌이를 만족한다는 진술이고, 개요의 진술보다 강하다.

양의 정수의 부분집합 $A$ 의 **상밀도(upper density)** 는 다음이다.

$$
\overline d(A)=\limsup_{N\to\infty}\frac{\lvert A\cap\lbrace 1,\dots,N\rbrace\rvert}{N}
$$

# 성질

## Poincaré 되돌이 정리

$k=1$ 인 경우가 **Poincaré 되돌이 정리(Poincaré recurrence theorem)** 다[^2]. 직관 절의 비둘기집 논증이 증명이고, 더 강하게 $E$ 의 거의 모든 점 $x$ 가 무한히 많은 $n$ 에서 $T^nx\in E$ 를 만족한다. 되돌아오지 않는 점의 집합 $F=E\setminus\bigcup_{n\ge 1}T^{-n}E$ 는 $F,T^{-1}F,T^{-2}F,\dots$ 가 서로 겹치지 않으므로 측도가 $0$ 이다.

## 대응 원리

정리(Furstenberg 대응 원리, Furstenberg correspondence principle). $\overline d(A)\gt 0$ 이면 측도보존계 $(X,\mathcal B,\mu,T)$ 와 $\mu(E)=\overline d(A)$ 인 $E$ 가 존재해, 모든 $n_1,\dots,n_k$ 에서 다음이 성립한다.

$$
\overline d\big(A\cap(A-n_1)\cap\cdots\cap(A-n_k)\big)\ge\mu\big(E\cap T^{-n_1}E\cap\cdots\cap T^{-n_k}E\big)
$$

증명의 요지. $X=\lbrace 0,1\rbrace^{\mathbb Z}$ 에 자리를 하나씩 미는 사상 $T$ 를 두고, $A$ 의 지시열 $x$ 를 잡는다. 상밀도를 주는 수열 $N_i$ 를 따라 점측도의 평균 $\frac1{N_i}\sum_{m=1}^{N_i}\delta_{T^mx}$ 를 만들고 [약수렴](weak-convergence.md)하는 부분수열의 극한을 $\mu$ 로 둔다. $\mu$ 는 $T$ 불변이고, $E=\lbrace\omega:\omega_0=1\rbrace$ 로 두면 $E\cap T^{-n_1}E\cap\cdots$ 가 유한 개 좌표로 정해지는 열린닫힌 집합이므로 측도가 밀도의 극한과 같아진다.

이 원리에 다중 되돌이 정리를 $n_j=jn$ 으로 적용하면 $A\cap(A-n)\cap\cdots\cap(A-kn)$ 이 공집합이 아니므로 $A$ 가 길이 $k+1$ 인 등차수열을 포함한다. 이것이 Szemerédi 정리다.

## 증명의 구조

양극단의 두 계에서는 직접 증명된다.

- 약혼합계. [혼합성](mixing.md)의 약혼합을 만족하면 다중 평균이 $\mu(E)^{k+1}$ 로 수렴한다. $\mu(E)^{k+1}\gt 0$ 이므로 성립한다.
- 콤팩트계. [무리수](irrational-numbers.md) 회전처럼 $T^n$ 이 항등사상에 가까운 $n$ 이 양의 밀도로 있으면, 그런 $n$ 에서 $T^{-jn}E$ 가 모두 $E$ 에 가까우므로 교집합의 측도가 $\mu(E)$ 에 가깝다.

일반 계는 이 둘을 쌓아 만든다. **Furstenberg–Zimmer 구조 정리(Furstenberg–Zimmer structure theorem)** 는 모든 측도보존계가 콤팩트 확대(compact extension)를 초한 번 되풀이한 탑과 그 위의 약혼합 확대(weakly mixing extension)로 분해된다는 정리다. 다중 되돌이가 콤팩트 확대, 약혼합 확대, 탑의 극한을 거쳐 각각 보존됨을 보이면 정리가 나온다[^1][^3].

## 다중 평균의 수렴

정의 절의 평균은 $\liminf$ 가 양수라는 것만 말한다. B. Host 와 B. Kra 는 $L^2$ 에서

$$
\frac1N\sum_{n=1}^{N}f_1(T^nx)f_2(T^{2n}x)\cdots f_k(T^{kn}x)
$$

가 수렴함을 증명했다[^4]. 극한을 정하는 인자는 멱영다양체(nilmanifold) 위의 회전이고, 이 인자를 재는 Host–Kra 반노름(Host–Kra seminorm)은 [Gowers 균등 노름](gowers-norms.md)의 측도보존계 판본이다.

## 일반화

- 서로 가환인 변환 $T_1,\dots,T_k$ 에서 $\mu(E\cap T_1^{-n}E\cap\cdots\cap T_k^{-n}E)\gt 0$ 인 $n$ 이 존재한다(Furstenberg–Katznelson)[^5]. 대응 원리로 옮기면 $\mathbb Z^d$ 의 양의 상밀도 집합이 모든 유한 모양의 닮은꼴을 포함한다는 다차원 Szemerédi 정리(multidimensional Szemerédi theorem)가 된다.
- 정수 계수이고 상수항이 $0$ 인 다항식 $p_1,\dots,p_k$ 에서 $\mu(E\cap T^{-p_1(n)}E\cap\cdots\cap T^{-p_k(n)}E)\gt 0$ 인 $n$ 이 존재한다(Bergelson–Leibman)[^6].

# 활용

- Szemerédi 정리. 대응 원리와 이 정리로 증명된다.
- [van der Waerden 정리](van-der-waerden-theorem.md)의 다항식 판본. Bergelson–Leibman 의 다항식 다중 되돌이에 대응 원리를 적용하면 유한 색칠의 한 색에 $a,a+p_1(n),\dots,a+p_k(n)$ 꼴이 나온다.
- [Hales–Jewett 정리](hales-jewett-theorem.md)의 밀도판. Furstenberg 와 Katznelson 은 같은 방법을 확장해 밀도 Hales–Jewett 정리를 증명했다[^7].

[^1]: H. Furstenberg, "Ergodic behavior of diagonal measures and a theorem of Szemerédi on arithmetic progressions", Journal d'Analyse Mathématique 31 (1977), 204–256.
[^2]: H. Poincaré, "Sur le problème des trois corps et les équations de la dynamique", Acta Mathematica 13 (1890), 1–270.
[^3]: H. Furstenberg, Y. Katznelson, D. Ornstein, "The ergodic theoretical proof of Szemerédi's theorem", Bulletin of the American Mathematical Society 7 (1982), 527–552.
[^4]: B. Host, B. Kra, "Nonconventional ergodic averages and nilmanifolds", Annals of Mathematics 161 (2005), 397–488.
[^5]: H. Furstenberg, Y. Katznelson, "An ergodic Szemerédi theorem for commuting transformations", Journal d'Analyse Mathématique 34 (1978), 275–291.
[^6]: V. Bergelson, A. Leibman, "Polynomial extensions of van der Waerden's and Szemerédi's theorems", Journal of the American Mathematical Society 9 (1996), 725–753.
[^7]: H. Furstenberg, Y. Katznelson, "A density version of the Hales–Jewett theorem", Journal d'Analyse Mathématique 57 (1991), 64–119.

# 연관 문서

## 선수지식

- [혼합성](mixing.md)
- [Szemerédi 정리](szemeredi-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #combinatorics #number_theory #theorem
