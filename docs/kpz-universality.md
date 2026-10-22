# KPZ 보편성류

# 개요

**KPZ 보편성류(Kardar–Parisi–Zhang universality class)** 는 1 차원 무작위 성장 모형 가운데 높이의 요동이 시간의 $1/3$ 제곱 규모이고, 척도를 맞춘 극한이 [Tracy–Widom 분포](tracy-widom.md)인 모형들의 부류다. 이름은 Kardar, Parisi, Zhang 이 1986 년에 쓴 확률 편미분방정식인 KPZ 방정식에서 왔다[^1].

이 부류의 모형은 높이 요동이 $t^{1/3}$, 공간 상관 길이가 $t^{2/3}$ 규모라는 공통 지수 $1:2:3$ 을 갖는다. 모서리 성장 모형, 비대칭 단순 배제 과정, 방향성 중합체, KPZ 방정식 자체가 이 부류에 든다.

# 직관

[최장 증가 부분수열](longest-increasing-subsequence.md) 문서에서는 정사각형에 뿌린 점들을 오른쪽 위로만 가는 경로로 최대한 많이 모았고, 그 개수의 요동이 Tracy–Widom 분포였다. 같은 계산을 격자에서 한다. 칸 $(i,j)$ 마다 평균 $1$ 인 지수분포의 독립 무게 $w(i,j)$ 를 놓고, $(1,1)$ 에서 $(m,n)$ 까지 오른쪽이나 위로만 가는 경로 가운데 무게의 합이 가장 큰 것을 찾는다. 그 최댓값 $G(m,n)$ 은 최장 증가 부분수열과 같은 동적 계획법으로 구한다.

$$
G(m,n)=w(m,n)+\max\bigl(G(m-1,n),\thinspace G(m,n-1)\bigr)
$$

경로를 하나로 고정하면 무게 $2N-1$ 개의 합이므로 $G$ 의 요동은 [중심극한정리](central-limit-theorem.md)에 따라 $N^{1/2}$ 규모일 것 같다. 그런데 $G(N,N)$ 은 경로 전체에 대한 최댓값이고, 실제 요동은 $N^{1/3}$ 규모다. 최댓값을 주는 경로는 대각선에서 $N^{2/3}$ 정도 벗어난다.

$G(i,j)\le t$ 인 칸 $(i,j)$ 를 모으면 시각 $t$ 에 왼쪽과 아래쪽이 모두 채워진 칸만 들어 있는 계단 모양이 된다. 칸 하나는 왼쪽 칸과 아래 칸이 채워진 뒤 지수분포의 시간만큼 기다렸다가 채워진다. 이 계단의 가장자리가 시간에 따라 자라는 높이 함수이고, 그 높이의 요동이 $t^{1/3}$ 규모다.

# 정의

## 지수 마지막 통과 침투

칸마다 평균 $1$ 인 지수분포의 독립 무게 $w(i,j)$ 를 놓은 모형에서, 오른쪽 위로 가는 격자 경로 $\pi$ 의 무게 합 최댓값

$$
G(m,n)=\max_{\pi:(1,1)\to(m,n)}\sum_{(i,j)\in\pi}w(i,j)
$$

을 **마지막 통과 시간(last passage time)** 이라 하고, 이 모형을 **지수 마지막 통과 침투(exponential last passage percolation)** 라 한다. $\lbrace (i,j):G(i,j)\le t\rbrace$ 의 시간 변화가 **모서리 성장 모형(corner growth model)** 이다.

## 완전 비대칭 단순 배제 과정

정수 위의 입자들이 각자 비율 $1$ 의 지수 시계를 갖고, 시계가 울리면 오른쪽 칸이 비어 있을 때만 한 칸 옮겨 가는 과정이 **완전 비대칭 단순 배제 과정(totally asymmetric simple exclusion process, TASEP)** 이다. 음의 정수에만 입자를 채운 계단 초기조건에서, 입자를 위로 가는 걸음, 빈칸을 오른쪽 가는 걸음으로 읽으면 배치가 모서리 성장의 가장자리가 된다. 입자 하나가 옮겨 가는 것이 칸 하나가 채워지는 것이다.

## KPZ 방정식

시공간 백색잡음 $\xi$ 에 대해 다음 방정식이 **KPZ 방정식** 이다.

$$
\partial_th=\tfrac12\partial_x^2h+\tfrac12(\partial_xh)^2+\xi
$$

둘째 항이 표면을 매끄럽게 하고, 셋째 항이 기울어진 자리에서 성장을 빠르게 하며, $\xi$ 가 무작위 성장을 준다. $(\partial_xh)^2$ 항이 없는 방정식은 Edwards–Wilkinson 방정식(Edwards–Wilkinson equation)이고 높이 요동이 $t^{1/4}$ 규모다.

## 보편성류와 척도 지수

높이 함수 $h(t,x)$ 가 다음 척도에서 자명하지 않은 극한을 가지면 그 모형을 **KPZ 보편성류** 에 넣는다.

$$
\varepsilon^{1/2}\Bigl(h(\varepsilon^{-3/2}t,\thinspace\varepsilon^{-1}x)-c\thinspace\varepsilon^{-3/2}t\Bigr)
$$

시간 $\varepsilon^{-3/2}$, 공간 $\varepsilon^{-1}$, 높이 $\varepsilon^{-1/2}$ 의 비가 $3:2:1$ 이다. 시간 $T$ 로 쓰면 높이 요동이 $T^{1/3}$, 공간 상관 길이가 $T^{2/3}$ 이다.

# 성질

## 모양 정리

> **정리 (Rost).** $x,y\gt 0$ 에서 거의 확실하게 다음이 성립한다[^2].

$$
\lim_{N\to\infty}\frac{G(\lfloor xN\rfloor,\lfloor yN\rfloor)}{N}=(\sqrt x+\sqrt y)^2
$$

증명의 요지. TASEP 의 계단 초기조건에서 입자 밀도가 $\rho(t,x)$ 인 거시적 방정식 $\partial_t\rho+\partial_x\bigl(\rho(1-\rho)\bigr)=0$ 의 희박파 해를 풀어 극한 모양을 얻는다. 극한이 존재하는 것은 $-G$ 가 아가법적이므로 Kingman 의 아가법 에르고딕 정리(subadditive ergodic theorem)에서 나온다.

## Johansson 정리

> **정리 (Johansson).** $\mathrm{TW}\_2$ 를 GUE(Gaussian unitary ensemble) Tracy–Widom 분포라 하면 다음 분포수렴이 성립한다[^3].

$$
\frac{G(N,N)-4N}{2^{4/3}N^{1/3}}\thickspace\longrightarrow\thickspace\mathrm{TW}\_2
$$

증명의 요지. RSK(Robinson–Schensted–Knuth) 대응을 지수 무게의 행렬에 쓰면 $G(N,N)$ 이 Laguerre 단위군 앙상블, 곧 $N\times N$ 복소 Wishart 행렬의 최대 고윳값과 같은 분포를 갖는다. 그 최대 고윳값의 가장자리 극한이 Tracy–Widom 분포다.

## 초기조건과 극한

극한 분포는 초기조건에 따라 바뀌고 지수는 바뀌지 않는다. 아래 GOE 는 Gaussian orthogonal ensemble 이다.

| 초기조건 | 한 점의 극한 분포 | 공간 과정의 극한 |
|---|---|---|
| 계단(쐐기) | GUE Tracy–Widom | Airy₂ 과정 |
| 평평함 | GOE Tracy–Widom | Airy₁ 과정 |
| 정상([Brown 운동](brownian-motion.md)) | Baik–Rains 분포 | Airy 정상 과정 |

Prähofer 와 Spohn 은 다핵 성장 모형(polynuclear growth model)에서 계단 초기조건의 공간 과정이 Airy₂ 과정으로 수렴함을 보였다[^4].

## KPZ 방정식의 해

$(\partial_xh)^2$ 항은 백색잡음 아래에서 뜻이 정해지지 않으므로 Cole–Hopf 변환으로 해를 정의한다. $Z$ 가 확률 열방정식 $\partial_tZ=\tfrac12\partial_x^2Z+\xi Z$ 의 해이면 $h=\log Z$ 를 KPZ 방정식의 해로 둔다. Amir, Corwin, Quastel 은 좁은 쐐기 초기조건에서 $h(t,0)$ 의 분포를 정확히 계산하고, $t^{-1/3}$ 으로 척도를 맞춘 극한이 $\mathrm{TW}\_2$ 임을 보였다[^5].

## KPZ 고정점

Matetski, Quastel, Remenik 은 TASEP 의 임의 초기조건에서 위 척도 극한이 존재함을 보이고 그 극한인 Markov 과정을 **KPZ 고정점(KPZ fixed point)** 이라 했다. 전이확률이 [Fredholm 행렬식](fredholm-determinant.md)으로 주어지고, 계단과 평평한 초기조건에서 각각 Airy₂ 과정과 Airy₁ 과정이 나온다[^6].

# 활용

- **무작위 순열.** Baik–Deift–Johansson 정리는 Poisson 점의 마지막 통과 침투가 이 부류에 든다는 진술이다. 최장 증가 부분수열의 길이가 $2\sqrt n+n^{1/6}\mathrm{TW}\_2$ 꼴인 것이 Johansson 정리와 같은 지수 $1/3$ 을 $\sqrt n$ 의 척도로 적은 것이다.
- **방향성 중합체.** 격자 경로에 무작위 에너지를 주고 Gibbs 가중치로 더한 분배함수를 쓰면, 마지막 통과 침투가 그 영도 극한이다. Seppäläinen 은 로그 감마 무게의 중합체에서 분배함수의 로그 요동이 $N^{1/3}$ 규모임을 증명했다.
- **실험.** 액정의 난류 상 경계가 자라는 실험에서 Takeuchi 와 Sano 는 원형 경계의 높이 요동이 GUE Tracy–Widom 분포를, 평평한 경계의 요동이 GOE Tracy–Widom 분포를 따름을 측정했다.

[^1]: M. Kardar, G. Parisi, Y.-C. Zhang, *Dynamic scaling of growing interfaces*, Phys. Rev. Lett. 56 (1986), 889–892.
[^2]: H. Rost, *Non-equilibrium behaviour of a many particle process: density profile and local equilibria*, Z. Wahrsch. Verw. Gebiete 58 (1981), 41–53.
[^3]: K. Johansson, *Shape fluctuations and random matrices*, Comm. Math. Phys. 209 (2000), 437–476.
[^4]: M. Prähofer, H. Spohn, *Scale invariance of the PNG droplet and the Airy process*, J. Stat. Phys. 108 (2002), 1071–1106.
[^5]: G. Amir, I. Corwin, J. Quastel, *Probability distribution of the free energy of the continuum directed random polymer in 1+1 dimensions*, Comm. Pure Appl. Math. 64 (2011), 466–537.
[^6]: K. Matetski, J. Quastel, D. Remenik, *The KPZ fixed point*, Acta Math. 227 (2021), 115–203.

# 연관 문서

## 선수지식

- [Tracy–Widom 분포](tracy-widom.md)
- [최장 증가 부분수열](longest-increasing-subsequence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #combinatorics #analysis
