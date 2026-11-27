# 극소 모형 프로그램

# 개요

**극소 모형 프로그램(minimal model program)** 은 주어진 다양체와 쌍유리 동치인 다양체 가운데 가장 단순한 것을 곡선의 수축을 되풀이해 찾는 절차다. 사영평면을 두 점에서 부풀린 곡면에는 사영직선과 같고 자기교차수가 $-1$ 인 곡선이 셋 있고, 어느 것을 먼저 수축하느냐에 따라 사영평면이 나오기도 하고 사영직선 둘의 곱이 나오기도 한다.

극소 모형 프로그램은 표준다발과 음으로 만나는 곡선만 수축한다. 그러면 절차가 끝나고, 끝에서 표준다발이 모든 곡선과 음이 아니게 만나는 극소 모형이나 [Fano 다양체](fano-varieties.md)를 올로 갖는 올뭉치가 나온다.

# 직관

사영평면 $\mathbb P^2$ 를 두 점 $p$, $q$ 에서 [부풀림](blow-ups.md)한 곡면을 $X$ 라 한다. $X$ 의 곡선의 류는 직선의 류 $H$ 와 예외 곡선 $E_1$, $E_2$ 로 적히고, $H^2=1$, $E_1^2=E_2^2=-1$, 나머지 교차수는 $0$ 이다. $p$ 와 $q$ 를 지나는 직선의 고유 변환 $L=H-E_1-E_2$ 는 $L^2=1-1-1=-1$ 이다.

$X$ 에는 사영직선과 같고 자기교차수가 $-1$ 인 곡선 $E_1$, $E_2$, $L$ 이 있고, 셋은 모두 수축할 수 있다. $E_1$ 과 $E_2$ 를 수축하면 $\mathbb P^2$ 로 돌아간다. $L$ 을 수축하면 $E_1\cdot L=1$ 이므로 $E_1$ 의 상은 자기교차수가 $-1+1=0$ 이 되고, $E_2$ 의 상도 그렇고, 두 상은 한 점에서 만난다. 이 곡면은 사영직선 둘의 곱 $\mathbb P^1\times\mathbb P^1$ 이고 두 상이 두 방향의 올이다.

$\mathbb P^2$ 의 곡선은 자기교차수가 $d^2\ge 1$ 이고 $\mathbb P^1\times\mathbb P^1$ 의 곡선은 이중차수 $(a,b)$ 에서 $2ab\ge 0$ 이므로, 둘 다 더 수축할 곡선이 없다. 같은 $X$ 에서 출발해 서로 다른 두 곡면에서 멈췄다.

[K3 곡면](k3-surfaces.md) $S$ 를 한 점에서 부풀린 곡면에서는 사정이 다르다. 표준류가 예외 곡선 $E$ 이고 $K\cdot E=E^2=-1$ 이며, 자기교차수가 $-1$ 인 사영직선은 $E$ 하나뿐이다. 이것을 수축하면 $K=0$ 인 $S$ 에서 멈추고, 끝 모형이 하나로 정해진다. 두 경우는 표준류와 음으로 만나는 곡선이 끝에 남느냐로 갈린다. $\mathbb P^2$ 에서는 직선과 $K=-3H$ 가 $-3$ 으로 만난다.

# 정의

매끄러운 사영 다양체 $X$ 위의 선다발 $D$ 가 모든 기약 곡선 $C$ 에 대해 $D\cdot C\ge 0$ 이면 $D$ 를 **nef** 라 한다. 직관 절의 K3 곡면은 $K=0$ 이라 nef 이고, $\mathbb P^2$ 와 $\mathbb P^1\times\mathbb P^1$ 의 표준다발은 nef 가 아니다.

곡면 $X$ 와 쌍유리 동치인 매끄러운 사영 곡면 $X'$ 의 표준다발이 nef 이면 $X'$ 을 $X$ 의 **극소 모형(minimal model)** 이라 한다. 사영직선과 같고 $E^2=-1$ 인 곡선 $E$ 는 [딸림 공식](adjunction-formula.md)으로 $K\cdot E=-1$ 이므로, 극소 모형에는 부풀림 문서의 (−1) 곡선이 없다.

$f:X\to Y$ 가 연결된 올을 갖는 사상이고 $\dim Y\lt\dim X$, $-K_X$ 가 $f$ 의 올마다 풍부하고, $f$ 가 수축하는 곡선의 류가 한 방향뿐이면 $f$ 를 **Mori 올뭉치(Mori fiber space)** 라 한다. 일반 올은 Fano 다양체다. 직관 절의 $\mathbb P^2\to$ 점, $\mathbb P^1\times\mathbb P^1$ 의 한 방향 사영이 Mori 올뭉치다.

삼차원 이상에서는 끝 모형이 매끄럽지 않을 수 있으므로, 극소 모형과 Mori 올뭉치의 정의에서 $X$ 에 말단 특이점(terminal singularity)과 $\mathbb Q$-분해성($\mathbb Q$-factoriality)을 허용한다[^1].

# 성질

## 곡면에서의 종료

(−1) 곡선을 하나 수축할 때마다 둘째 Betti 수가 $1$ 줄고 $K^2$ 가 $1$ 는다. 둘째 Betti 수는 $1$ 이상이므로 수축은 유한 번에 끝나고, 끝의 곡면에는 (−1) 곡선이 없다. 직관 절의 $X$ 는 $b_2=3$ 에서 시작해 $\mathbb P^2$ 의 $b_2=1$ 이나 $\mathbb P^1\times\mathbb P^1$ 의 $b_2=2$ 에서 멈췄다.

## 곡면의 끝 모형

정리. 매끄러운 사영 곡면 $X$ 의 [Kodaira 차원](kodaira-dimension.md)이 $0$ 이상이면 $X$ 의 극소 모형이 있고 동형을 빼고 하나뿐이다. (−1) 곡선이 없는 곡면이 이 극소 모형이다[^2].

정리(Enriques). Kodaira 차원이 $-\infty$ 이고 (−1) 곡선이 없는 곡면은 $\mathbb P^2$ 이거나 곡선 위의 [선직곡면](ruled-surfaces.md)이다[^2].

$\kappa=-\infty$ 에서는 끝 모형이 하나로 정해지지 않는다. 직관 절의 $\mathbb P^2$ 와 $\mathbb P^1\times\mathbb P^1$ 외에도, 사영직선 위의 선직곡면 가운데 [Hirzebruch 곡면](hirzebruch-surfaces.md) $F_n$ $(n\ne 1)$ 이 모두 극소이고 서로 쌍유리 동치다.

## 원뿔 정리

$X$ 위의 곡선을 실계수로 더한 류들이 이루는 볼록 뿔의 닫힘을 $\overline{\mathrm{NE}}(X)$ 라 한다. 이것을 곡선의 원뿔(cone of curves)이라 한다.

정리(Mori 원뿔 정리, Mori's cone theorem). 매끄러운 사영 다양체 $X$ 에 대해 유리곡선 $C_1,C_2,\dots$ 이 있어 다음이 성립하고, 각 $C_i$ 는 $0\lt -K_X\cdot C_i\le\dim X+1$ 을 만족한다[^3].

$$
\overline{\mathrm{NE}}(X)=\overline{\mathrm{NE}}(X)\_{K_X\ge 0}+\sum_i\mathbb R_{\ge 0}\lbrack C_i\rbrack
$$

$K_X$ 와 음으로 만나는 쪽의 반직선 $\mathbb R_{\ge 0}\lbrack C_i\rbrack$ 를 **극선(extremal ray)** 이라 한다. 곡면에서 극선은 (−1) 곡선, 선직곡면의 올, $\mathbb P^2$ 의 직선이 주는 반직선이다. 직관 절의 $X$ 에서는 $E_1$, $E_2$, $L$ 세 곡선이 극선을 주고, $\overline{\mathrm{NE}}(X)$ 는 이 셋으로 생성된다.

## 수축과 꽃잎 변환

정리(수축 정리, contraction theorem). 극선 $R$ 마다 $R$ 에 류가 속하는 곡선을 정확히 점으로 보내는 사상 $\varphi_R:X\to Y$ 가 있다[^1].

수축은 세 가지다.

- 인자 수축(divisorial contraction). 예외 집합이 인자다. 곡면의 (−1) 곡선 수축이 이 경우다. 결과로 극소 모형 프로그램을 계속한다.
- 올뭉치 수축(fiber type contraction). $\dim Y\lt\dim X$ 이다. 이것은 Mori 올뭉치이고 프로그램은 여기서 끝난다.
- 작은 수축(small contraction). 예외 집합의 여차원이 $2$ 이상이다. 이때 $Y$ 의 표준인자는 $\mathbb Q$-Cartier 가 아니어서 $Y$ 에서 계속할 수 없다.

작은 수축 $X\to Y$ 에서는 $Y$ 를 거쳐 $X^+\to Y$ 로 바꾼다. $X^+$ 는 $X$ 와 여차원 $1$ 에서 같고, $X^+\to Y$ 가 수축하는 곡선은 $K_{X^+}$ 와 양으로 만난다. 이 $X\dashrightarrow X^+$ 를 **꽃잎 변환(flip)** 이라 한다. 곡면에는 작은 수축이 없으므로 꽃잎 변환은 삼차원부터 나타난다.

## 존재와 종료

삼차원에서 꽃잎 변환의 존재는 Mori 가 증명했고[^4], 꽃잎 변환이 무한히 이어지지 않는다는 것도 삼차원에서 증명되었다[^1]. 일반 차원에서는 다음이 증명되었다.

정리(Birkar–Cascini–Hacon–McKernan). 매끄러운 사영 다양체 $X$ 가 일반형이면 $X$ 의 극소 모형이 있다. $X$ 가 유리곡선으로 덮이면(uniruled) $X$ 는 Mori 올뭉치와 쌍유리 동치다[^5].

극소 모형 $X'$ 에서 $K_{X'}$ 의 어떤 거듭제곱이 단면으로 생성된다는 진술이 풍부성 추측(abundance conjecture)이다. 곡면에서는 끝 모형의 분류로 성립한다.

# 활용

- 곡면의 분류. Kodaira 차원이 $0$ 이상인 곡면은 하나뿐인 극소 모형으로 분류하고, $-\infty$ 인 곡면은 $\mathbb P^2$ 와 선직곡면으로 분류한다. [Castelnuovo 유리성 판정법](castelnuovo-rationality-criterion.md)은 이 분류에서 끝 모형이 $\mathbb P^2$ 와 쌍유리 동치인 경우를 $q=P_2=0$ 으로 가른다.
- Fano 다양체의 위치. 유리곡선으로 덮이는 다양체의 끝 모형이 Mori 올뭉치이므로, 그 올인 Fano 다양체의 분류가 쌍유리 분류의 한 부분이 된다. [삼차원 Fano 다양체](fano-threefolds.md)의 Picard 수 $2$ 이상인 족을 Mori–Mukai 가 분류할 때 원뿔 정리의 극선 수축을 썼다.
- 일반형 다양체의 표준 모형. 일반형 다양체의 극소 모형에서 다중표준사상의 상을 표준 모형(canonical model)이라 한다. [Kähler–Ricci 흐름](kahler-ricci-flow.md)은 이 표준 모형 위의 특이점이 있는 [Kähler–Einstein 계량](kahler-einstein-metrics.md)으로 수렴하고, 유한 시간 특이점을 수축에 맞추는 것이 Song–Tian 의 해석적 극소 모형 프로그램이다.
- 다중종수의 계산. 극소 모형에서 $K$ 가 nef 이므로 [Kodaira 소멸 정리](kodaira-vanishing-theorem.md)의 Kawamata–Viehweg 판본으로 $P_m$ 을 Riemann–Roch 로 계산한다.

[^1]: J. Kollár, S. Mori, *Birational Geometry of Algebraic Varieties*, Cambridge Tracts in Mathematics 134, Cambridge University Press, 1998.

[^2]: A. Beauville, *Complex Algebraic Surfaces*, 2nd ed., London Mathematical Society Student Texts 34, Cambridge University Press, 1996, Chapters II, III, VI.

[^3]: S. Mori, "Threefolds whose canonical bundles are not numerically effective", *Annals of Mathematics* 116 (1982), 133–176.

[^4]: S. Mori, "Flip theorem and the existence of minimal models for 3-folds", *Journal of the American Mathematical Society* 1 (1988), 117–253.

[^5]: C. Birkar, P. Cascini, C. D. Hacon, J. McKernan, "Existence of minimal models for varieties of log general type", *Journal of the American Mathematical Society* 23 (2010), 405–468.

# 연관 문서

## 선수지식

- [Kodaira 차원](kodaira-dimension.md)
- [선직곡면](ruled-surfaces.md)
- [Fano 다양체](fano-varieties.md)

## 더 알아보기

- [Flop](flops.md)

#algebra #complex_analysis
