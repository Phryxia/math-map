# Selberg 대각합 공식

# 개요

[Eisenstein 급수](eisenstein-series.md)에서 `L^2(\Gamma\backslash\mathbb H)` 가 이산 스펙트럼과 연속 스펙트럼으로 갈라지는 것을 보았다. 그런데 그 이산 스펙트럼, 곧 Maass 형식의 고윳값 `\lambda_j=\tfrac14+r_j^2` 에 대해 우리는 놀랄 만큼 아는 것이 없다. 하나도 명시적으로 알려져 있지 않다. `\Gamma=\mathrm{SL}_2(\mathbb Z)` 에서 첫 고윳값이 `r_1\approx9.533\dots` 라는 것조차 수치 계산의 결과다.

Selberg 대각합 공식은 이 스펙트럼을 **간접적으로** 붙잡는다. 개별 고윳값 대신 고윳값 전체에 걸친 합을 계산하되, 그 답을 곡면의 **닫힌 측지선**으로 표현한다.

$$
\underbrace{\sum_j h(r_j)}_{\text{스펙트럼}}\;+\;\text{(연속 기여)}\;=\;\underbrace{\frac{\mathrm{vol}}{4\pi}\int_{-\infty}^\infty h(r)\,r\tanh(\pi r)\,dr+\sum_{\{\gamma\}}\sum_{k\ge1}\frac{\ell_\gamma\,g(k\ell_\gamma)}{2\sinh(k\ell_\gamma/2)}}_{\text{기하}}
$$

왼쪽은 해석, 오른쪽은 [Riemann 계량](riemannian-metrics.md)이 정하는 측지선의 길이들이다. 두 세계를 잇는 이 등식이 Weyl 법칙, 소측지선 정리, Maass 형식의 존재 증명을 한꺼번에 준다.

구조적으로 이 공식은 소수 정리의 명시공식과 같다. 거기서는 `\zeta` 의 영점과 소수의 거듭제곱이 짝을 이루었고, 여기서는 Laplace 고윳값과 닫힌 측지선이 짝을 이룬다. 실제로 Selberg 는 이 유비를 끝까지 밀어붙여 Riemann 가설이 성립하는 zeta 함수를 만들었다.

# 직관

## 원형은 Poisson 합 공식

가장 단순한 경우부터 보자. 곡면 대신 원 `\mathbb R/L\mathbb Z` 를 놓으면 Laplace 고윳값은 `(2\pi n/L)^2`(`n\in\mathbb Z`) 이고, "닫힌 측지선" 은 원을 `m` 바퀴 도는 길이 `m L` 의 곡선이다. 두 자료를 잇는 등식이

$$
\sum_{n\in\mathbb Z}h\Big(\frac{2\pi n}{L}\Big)=L\sum_{m\in\mathbb Z}g(mL),\qquad
g(u)=\frac1{2\pi}\int h(r)e^{-iru}\,dr
$$

곧 Poisson 합 공식이다. 왼쪽이 스펙트럼 쪽, 오른쪽이 기하 쪽이다. Selberg 공식은 이것을 곡률 `-1` 의 곡면으로 옮긴 것이며, 평평한 경우에 없던 두 항(부피에 비례하는 항, 첨점에서 오는 연속 기여)이 추가된다.

## 열핵의 대각합을 두 가지로 센다

증명의 뼈대는 한 줄이다. 점 쌍 불변 핵 `k(z,w)`(거리에만 의존)에서 자기동형 핵

$$
K(z,w)=\sum_{\gamma\in\Gamma}k(z,\gamma w)
$$

를 만들고, 대각선 위의 적분 `\int_{\Gamma\backslash\mathbb H}K(z,z)\,d\mu` 를 **두 방식으로** 계산한다.

- **스펙트럼 전개.** `K` 를 고유함수로 전개하면 `\sum_j h(r_j)` 가 나온다. `h` 는 `k` 의 Selberg/Harish-Chandra 변환이다.
- **기하 전개.** `\Gamma` 의 원소를 공액류로 묶어 각 류의 기여를 계산하면 측지선 항이 나온다.

같은 양을 두 언어로 쓴 것이므로 등식이 된다. 대각합 공식이 대부분 이런 모양을 하는 이유다.

## 공액류가 왜 측지선인가

`\Gamma\subset\mathrm{PSL}_2(\mathbb R)` 의 원소는 대각합으로 분류된다. `|\mathrm{tr}\gamma|>2` 인 쌍곡 원소는 `\mathbb H` 위에서 한 측지선을 따라 평행이동하며, 그 이동거리 `\ell_\gamma` 는

$$
2\cosh\frac{\ell_\gamma}2=|\mathrm{tr}\,\gamma|
$$

로 정해진다. 몫 곡면 `\Gamma\backslash\mathbb H` 로 내려가면 이 측지선이 닫힌 고리가 된다. 그러므로

$$
\{\Gamma\ \text{의 쌍곡 공액류}\}\ \longleftrightarrow\ \{\text{닫힌 측지선}\}
$$

이고, 원시 측지선을 `k` 바퀴 도는 것이 `\gamma^k` 에 해당한다. 공식의 오른쪽에 `\sum_k` 가 붙는 이유다. 항등원의 기여가 부피 항, 타원 원소가 유한 위수의 기여, 포물 원소가 첨점의 기여를 준다.

## 첨점이 있으면 공식이 지저분해진다

`\Gamma_0(N)` 같은 비콤팩트 경우에는 연속 스펙트럼이 있어 두 전개가 각각 발산한다. 발산을 서로 상쇄시키는 정규화가 필요하고, 그 대가로 공식에

$$
-\frac1{4\pi}\int_{-\infty}^\infty h(r)\,\frac{\varphi'}{\varphi}\Big(\frac12+ir\Big)dr+\frac14h(0)\varphi\Big(\frac12\Big)
$$

같은 항이 들어온다. 여기서 `\varphi` 는 Eisenstein 급수의 산란 행렬식이며, `\mathrm{SL}_2(\mathbb Z)` 에서는 `\varphi(s)=\xi(2s-1)/\xi(2s)` 다. 즉 **Riemann zeta 함수가 대각합 공식 안에 직접 등장한다**. 스펙트럼을 세는 일에 `\zeta` 의 영점이 끼어드는 셈이고, 이것이 해석적 정수론과 스펙트럼 이론이 얽히는 지점이다.

# 정의

## 설정

`\Gamma\subset\mathrm{PSL}_2(\mathbb R)` 를 유한 공부피 이산군, `X=\Gamma\backslash\mathbb H` 를 쌍곡 곡면, `\Delta=-y^2(\partial_x^2+\partial_y^2)` 를 Laplace 작용소라 하자. 이산 스펙트럼을 `\lambda_j=\tfrac14+r_j^2` 로 쓴다.

검사함수 `h(r)` 는 `|\mathrm{Im}\,r|\le\tfrac12+\delta` 에서 정칙이고 `h(r)=O((1+|r|)^{-2-\delta})` 인 짝함수라 하고, 그 Fourier 변환을 `g(u)=\frac1{2\pi}\int h(r)e^{-iru}dr` 로 둔다.

## 콤팩트 곡면의 공식

`X` 가 콤팩트이고 `\Gamma` 에 타원 원소가 없으면

$$
\sum_{j\ge0}h(r_j)=\frac{\mathrm{vol}(X)}{4\pi}\int_{-\infty}^{\infty}h(r)\,r\tanh(\pi r)\,dr
+\sum_{\{\gamma\}_{\mathrm{prim}}}\sum_{k=1}^{\infty}\frac{\ell_\gamma}{2\sinh(k\ell_\gamma/2)}\,g(k\ell_\gamma)
$$

다[^1]. 첫 항은 항등원(연속체 근사), 둘째 항은 원시 닫힌 측지선 `\gamma` 와 그 반복이다.

## 첨점이 있는 경우

`\Gamma=\Gamma_0(N)` 처럼 첨점이 있으면 왼쪽에 연속 스펙트럼의 기여를 빼 주고, 오른쪽에 포물 원소와 산란 행렬의 항을 더한다. 구조는 같다.

$$
\sum_jh(r_j)-\frac1{4\pi}\int h(r)\frac{\varphi'}{\varphi}\Big(\tfrac12+ir\Big)dr
=\text{(항등)}+\text{(쌍곡)}+\text{(타원)}+\text{(포물)}
$$

## Selberg zeta 함수

원시 닫힌 측지선 전체에 대해

$$
Z(s)=\prod_{\{\gamma\}_{\mathrm{prim}}}\prod_{n=0}^{\infty}\big(1-e^{-(s+n)\ell_\gamma}\big),\qquad \mathrm{Re}(s)>1
$$

를 정의한다. 측지선이 소수의 자리를, `\ell_\gamma` 가 `\log p` 의 자리를 차지한 Euler 곱이다. 대각합 공식은 `Z` 가 `\mathbb C` 전체로 해석적 연속되고 함수방정식을 가짐을 보여 준다.

# 성질

## Weyl 법칙

`h` 를 `[0,T]` 의 특성함수에 가깝게 잡으면 고윳값 계수함수가 나온다. 콤팩트 곡면에서

$$
\#\{j:\ r_j\le T\}=\frac{\mathrm{vol}(X)}{4\pi}T^2+O(T\log T)
$$

이다. 주항은 부피에만 의존하며, 이것이 "북을 두드려 그 넓이는 들을 수 있다" 는 진술의 정확한 형태다. `\Gamma_0(N)` 같은 산술군에서는 연속 스펙트럼의 기여가 `O(T\log T)` 에 머물러, 이산 스펙트럼이 주항을 차지한다. 그러므로 **Maass 형식은 무한히 많다**. 이것이 Maass 형식의 존재를 보이는 거의 유일한 방법이다.

비산술 격자에서는 사정이 다르다. Phillips–Sarnak 은 Teichmüller 공간에서 격자를 변형하면 Maass 형식이 연속 스펙트럼 속으로 녹아 사라진다고 예상했고, 이 대비가 산술성이 스펙트럼에 남기는 흔적이다.

## 소측지선 정리

`h` 를 반대로 잡아 기하 쪽을 세면

$$
\#\{\text{원시 닫힌 측지선}:\ \ell_\gamma\le L\}\ \sim\ \frac{e^L}{L}
$$

를 얻는다. 소수 정리 `\pi(x)\sim x/\log x` 에서 `x=e^L` 을 넣은 것과 정확히 같은 꼴이다. 유비가 형식적인 것이 아니라 증명 구조까지 같다. `Z(s)` 의 `s=1` 에서의 단순 영점이 소수 정리에서 `\zeta(s)` 의 `s=1` 극점 역할을 한다.

## Riemann 가설이 성립하는 zeta

`Z(s)` 의 자명하지 않은 영점은 `s=\tfrac12\pm ir_j` 에 있다. Laplace 고윳값이 `\lambda_j\ge0` 이므로 `r_j` 는 실수이거나 `|{\rm Im}\,r_j|\le\tfrac12` 인 순허수다. 따라서

$$
\lambda_j\ge\tfrac14\ \Longrightarrow\ Z(s)\ \text{의 영점이 }\mathrm{Re}(s)=\tfrac12\ \text{위에 있다}
$$

콤팩트 곡면에서는 `\lambda_1>0` 만으로 예외 영점이 `[0,1]` 의 실축 위 유한 개뿐임이 나오고, 이 의미에서 `Z` 는 Riemann 가설을 만족한다. 영점이 자기수반 작용소의 스펙트럼에서 오기 때문이다. Hilbert–Pólya 가 `\zeta` 에 대해 바라던 바로 그 구조가 `Z` 에서는 실제로 성립한다.

산술 곡면에서 `\lambda_1\ge\tfrac14` 이 성립하는가는 **Selberg 1/4 추측**이며 열려 있다. 현재 최선은 `\lambda_1\ge\tfrac{975}{4096}\approx0.238` (Kim–Sarnak) 이다. 이 추측은 Ramanujan 추측의 아르키메데스 자리 판본이다.

## 길이 스펙트럼과 동일스펙트럼

공식은 두 자료가 서로를 결정함을 뜻한다. Laplace 스펙트럼을 알면 길이 스펙트럼이 나오고 그 역도 성립한다. 그러나 어느 쪽도 곡면의 등거리류를 결정하지는 못한다. Vignéras 와 Sunada 가 동일스펙트럼이면서 등거리가 아닌 쌍곡 곡면을 만들었고, Gordon–Webb–Wolpert 가 평면 영역에서 같은 예를 만들어 "북 모양은 들을 수 없다" 를 확정했다.

# 활용

## 평평한 경우를 수치로 확인한다

Poisson 합 공식이 대각합 공식의 아벨 판본이라는 것을 직접 확인할 수 있다. `h(r)=e^{-tr^2}` 로 잡으면 `g(u)=(4\pi t)^{-1/2}e^{-u^2/4t}` 다.

```python
import math

L, t = 3.7, 0.21                       # 원 R/LZ 의 둘레와 열 시간
h = lambda r: math.exp(-t*r*r)                              # 검사함수
g = lambda u: math.exp(-u*u/(4*t))/math.sqrt(4*math.pi*t)   # 그 Fourier 변환

spec = sum(h(2*math.pi*n/L) for n in range(-4000, 4001))    # 고윳값 쪽
geom = L*sum(g(m*L) for m in range(-4000, 4001))            # 닫힌 측지선 쪽
print("스펙트럼 쪽 =", spec)
print("기하 쪽     =", geom)
print("차이        =", abs(spec - geom))
```

```
스펙트럼 쪽 = 2.277651202048083
기하 쪽     = 2.277651202048082
차이        = 8.881784197001252e-16
```

왼쪽 합은 `\{(2\pi n/L)^2\}` 라는 스펙트럼만 쓰고, 오른쪽 합은 `\{mL\}` 이라는 길이만 쓴다. 서로 다른 두 자료가 기계 정밀도까지 같은 수를 준다. 쌍곡 곡면에서는 여기에 부피 항과 `\sinh` 가중치가 붙을 뿐 구조는 같다.

## Maass 형식을 세고 찾는다

Weyl 법칙은 개수를 주지만 위치를 주지 않는다. 실제 계산은 Hejhal 알고리즘처럼 Fourier 계수의 정합성을 이용하며, 대각합 공식은 그렇게 얻은 목록이 완전한지(빠뜨린 고윳값이 없는지) 검증하는 데 쓰인다. 유한 구간의 고윳값 개수를 공식으로 독립 계산해 대조하는 것이다.

## Arthur–Selberg 로의 일반화

`\mathrm{SL}_2(\mathbb R)` 를 일반 환원군 `G` 로, `\Gamma\backslash\mathbb H` 를 `G(\mathbb Q)\backslash G(\mathbb A)` 로 바꾼 것이 Arthur–Selberg 대각합 공식이다. 기하 쪽이 궤도적분의 합, 스펙트럼 쪽이 자기동형 표현의 지표의 합이 된다.

$$
\sum_{\{\gamma\}}\mathrm{vol}\cdot O_\gamma(f)\;=\;\sum_\pi m(\pi)\,\mathrm{tr}\,\pi(f)
$$

두 군 `G,H` 에 대해 공식을 세우고 기하 쪽을 맞추면 스펙트럼 쪽이 맞아 표현의 대응이 나온다. 이것이 [Langlands 강령](langlands-program.md)의 함수성을 증명하는 주요 수단이며, 기하 쪽을 맞추는 데 필요한 등식이 기본 보조정리다. 비콤팩트성에서 오는 발산을 잘라 내는 Arthur 의 절단은 위에서 본 `\varphi'/\varphi` 항의 일반화다.

## 양자 혼돈

`\sinh(k\ell_\gamma/2)` 라는 분모는 길이가 긴 측지선의 기여가 지수적으로 작다는 뜻이지만, 그런 측지선의 개수 자체가 `e^L/L` 로 지수적으로 늘어난다. 두 지수가 정확히 상쇄되어 공식이 아슬아슬하게 수렴하고, 이 균형이 고윳값 통계를 결정한다.

물리 쪽의 예상은 혼돈계의 고윳값 간격이 랜덤 행렬 통계(GOE)를 따른다는 것인데, 산술 곡면은 예외적으로 Poisson 통계를 보인다. 원인은 Hecke 대칭에서 오는 측지선 길이의 큰 중복도다. 산술성이 다시 한번 스펙트럼에 흔적을 남기는 장면이며, Riemann zeta 영점의 간격이 GUE 를 따른다는 Montgomery–Odlyzko 관측과 대비된다.

[^1]: A. Selberg, *Harmonic analysis and discontinuous groups in weakly symmetric Riemannian spaces*, J. Indian Math. Soc. **20** (1956). 표준 서술은 H. Iwaniec, *Spectral Methods of Automorphic Forms* (2판) 10–11장. 일반화는 J. Arthur, *An introduction to the trace formula* (Clay Math. Proc. 4, 2005). 본문의 수치 확인은 직접 한 것이다.

# 연관 문서

## 선수지식

- [Eisenstein 급수와 스펙트럼 분해](eisenstein-series.md)
- [Riemann 계량과 측지선](riemannian-metrics.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #differential_geometry #theorem
