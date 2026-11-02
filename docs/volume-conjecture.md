# 볼륨 추측

# 개요

**볼륨 추측(volume conjecture)** 은 쌍곡 매듭 $K$ 의 색칠 [Jones 다항식](knot-invariants.md)을 $1$ 의 $N$ 제곱근에서 평가한 값의 증가율이 여집합 $S^3\setminus K$ 의 쌍곡 부피를 준다는 추측이다. Jones 다항식은 매듭 도식의 교차점마다 규칙을 적용해 합을 취하는 조합적 계산이고, 그 과정에 길이도 각도도 쓰이지 않는다. 8 자매듭의 여집합은 곡률이 $-1$ 인 계량을 가지며 그 부피 $2.029883\ldots$ 는 매듭만으로 정해진다. 추측의 내용은 $N$ 을 키우며 Jones 다항식의 값이 커지는 속도를 재면 이 부피가 나온다는 것이다.

# 직관

매듭에는 성격이 다른 두 불변량이 있다. [Jones 다항식](knot-invariants.md)은 매듭 도식의 교차점마다 규칙을 적용해 합을 취하는 계산이고, 길이도 각도도 쓰지 않는다. 8 자매듭 $4_1$ 의 여집합 $S^3\setminus 4_1$ 은 곡률이 $-1$ 인 계량을 하나뿐으로 갖고, 그 부피 $2.029883\ldots$ 은 매듭만으로 정해지는 수다. 이 부피를 교차점 계산에서 얻을 수 있는지를 8 자매듭으로 본다.

Kashaev 는 8 자매듭에 대해 $N$ 마다 다음 수를 계산했다. $q=e^{2\pi i/N}$ 으로 둔다.

$$
\langle 4_1\rangle_N=\sum_{k=0}^{N-1}\prod_{j=1}^{k}\big\vert 1-q^{j}\big\vert^2,\qquad \big\vert 1-q^j\big\vert=2\sin\frac{\pi j}{N}
$$

곱의 각 인수 $2\sin(\pi j/N)$ 은 $j/N$ 이 $1/6$ 과 $5/6$ 사이일 때 $1$ 보다 크고, $5/6$ 을 넘으면 $1$ 보다 작다. 그래서 $k$ 를 늘리면 곱이 $k\approx 5N/6$ 까지 커졌다가 줄어들고, 합의 $N$ 개 항 가운데 이 항이 가장 크다.

가장 큰 항의 로그는 $\log(2\sin t)$ 의 Riemann 합이고, $N$ 이 크면 [Lobachevsky 함수](lobachevsky-function.md) $\Lambda$ 의 값으로 바뀐다.

$$
\log\prod_{j=1}^{5N/6}\Big(2\sin\frac{\pi j}N\Big)^2\approx\frac{2N}{\pi}\int_0^{5\pi/6}\log(2\sin t)\thinspace dt=\frac{2N}{\pi}\Lambda\Big(\frac\pi6\Big)=\frac{3N}{\pi}\Lambda\Big(\frac\pi3\Big)
$$

항이 $N$ 개뿐이므로 합 전체의 로그도 가장 큰 항의 로그와 $\log N$ 정도만 다르다. 따라서 $\frac{2\pi}{N}\log\langle 4_1\rangle_N$ 은 $6\Lambda(\pi/3)=2.029883\ldots$ 으로 수렴한다. 8 자매듭 여집합은 부피가 $3\Lambda(\pi/3)$ 인 이상 정사면체(regular ideal tetrahedron) 두 개로 분할되므로, 이 값이 여집합의 부피다.

# 정의

## 색 Jones 다항식

$K$ 를 매듭이라 하자. **색 Jones 다항식(colored Jones polynomial)** $J_N(K;q)$ 는 $K$ 를 $\mathfrak{sl}\_2$ 의 $N$ 차원 기약표현으로 색칠해 얻은 양자 불변량이고, $J_N(\text{풀린 매듭};q)=1$ 로 정규화한다.

- $N=2$ 이면 $J_2(K;q)$ 는 보통의 Jones 다항식을 풀린 매듭의 값으로 나눈 것이다.
- $N=1$ 이면 모든 매듭에서 $J_1=1$ 이다.

**Kashaev 불변량(Kashaev invariant)** $\langle K\rangle_N$ 은 Kashaev 가 양자 이중로그(quantum dilogarithm)의 $R$ 행렬로 정의한 복소수다. 직관 절의 합이 8 자매듭의 Kashaev 불변량이다.

## 단체적 부피

닫힌 또는 경계가 원환면인 3 다양체 $M$ 의 **단체적 부피(simplicial volume)** 는 Gromov 노름 $\Vert M\Vert$ 에 이상 정사면체의 부피 $v_3=1.01494\ldots$ 를 곱한 값이다. 매듭 $K$ 에 대해 $\mathrm{Vol}(S^3\setminus K)=v_3\Vert S^3\setminus K\Vert$ 로 적는다.

- $K$ 가 쌍곡 매듭, 곧 여집합이 완비 유한부피 [쌍곡 3 다양체](hyperbolic-3-manifolds.md)이면 $\mathrm{Vol}(S^3\setminus K)$ 는 쌍곡 부피와 같다. 8 자매듭이면 $2.029883\ldots$ 이다.
- 원환면 매듭(torus knot)의 여집합은 Seifert 올다양체(Seifert fibered space)이고 단체적 부피가 $0$ 이다.

## 볼륨 추측

**볼륨 추측(volume conjecture)** 은 모든 매듭 $K$ 에 대해

$$
\lim_{N\to\infty}\frac{2\pi}N\log\big\vert J_N(K;e^{2\pi i/N})\big\vert=\mathrm{Vol}(S^3\setminus K)
$$

라는 추측이다. Kashaev 가 1997 년 쌍곡 매듭과 $\langle K\rangle_N$ 으로 처음 제기했고, H. Murakami 와 J. Murakami 가 2001 년 색 Jones 다항식과 단체적 부피의 진술로 바꾸었다.[^1]

- 8 자매듭에서 좌변은 직관 절의 계산으로 $2.029883\ldots$ 이다.
- 원환면 매듭에서는 $\vert J_N\vert$ 가 $N$ 의 거듭제곱 정도로만 자라 좌변이 $0$ 이고, 우변도 $0$ 이다.

**정련된 볼륨 추측(refined volume conjecture)** 은 쌍곡 매듭에 대해 [Chern–Simons 이론](chern-simons.md)의 불변량 $\mathrm{CS}$ 까지 포함한 점근식

$$
J_N(K;e^{2\pi i/N})\sim c\thinspace N^{3/2}\thinspace e^{N(\mathrm{Vol}+i\thinspace\mathrm{CS})/2\pi}
$$

를 예측한다. 8 자매듭에서는 $\mathrm{CS}=0$ 이고 $c=3^{-1/4}$ 이다.[^2]

# 성질

## Kashaev 불변량과의 일치

모든 매듭 $K$ 에 대해 $\langle K\rangle_N=J_N(K;e^{2\pi i/N})$ 이다(Murakami–Murakami). 그래서 Kashaev 의 원래 추측과 색 Jones 다항식의 진술이 같은 내용이다.[^1]

## 풀린 매듭의 검출

볼륨 추측이 참이면, 모든 $N$ 에서 $J_N(K;q)=1$ 인 매듭은 풀린 매듭뿐이다(Murakami–Murakami). 모든 $J_N$ 이 $1$ 이면 좌변이 $0$ 이므로 단체적 부피가 $0$ 이다. 단체적 부피가 $0$ 인 매듭은 원환면 매듭에서 위성 연산과 연결합을 반복해 얻는 매듭이고, 이 가운데 풀린 매듭이 아닌 것은 색 Jones 다항식이 자명하지 않다.[^1] 보통 Jones 다항식 $J_2$ 하나가 풀린 매듭을 검출하는지는 알려진 열린 문제다.[^3]

## 증명된 매듭

| 매듭 | 증명 |
|---|---|
| 8 자매듭 $4_1$ | Ekholm |
| 원환면 매듭 | Kashaev–Tirkkonen |
| $5_2$ | Ohtsuki |
| 교차수 6 의 쌍곡 매듭 | Ohtsuki–Yokota |

일반 매듭에 대한 볼륨 추측은 알려진 열린 문제다.[^2]

## Witten 점근 추측과의 비교

[Witten 점근 추측](witten-asymptotics.md)과 볼륨 추측은 둘 다 양자 불변량의 점근이지만 극한을 취하는 방식이 다르다.

| | Witten 점근 추측 | 볼륨 추측 |
|---|---|---|
| 대상 | 닫힌 3 [다양체](manifolds.md) | $S^3$ 안의 매듭 |
| 키우는 것 | 레벨 $k$ | 색 $N$ |
| $q$ | $e^{2\pi i/(k+2)}$ | $e^{2\pi i/N}$, 색과 함께 움직인다 |
| 증가 | $k$ 의 거듭제곱 | $N$ 에 대해 지수적 |
| 지수에 나오는 값 | 실수 CS 값 | 부피와 CS 값의 복소 조합 |

Witten 쪽의 임계점은 $\mathrm{SU}(2)$ 평탄 접속이어서 [실수](real-numbers.md) CS 값이 위상 $e^{2\pi ik\mathrm{CS}}$ 로만 나오고 절댓값을 키우지 않는다. 볼륨 추측 쪽은 쌍곡 구조에 대응하는 $\mathrm{SL}\_2(\mathbb C)$ 평탄 접속이 임계점이어서 CS 값이 복소수 $\mathrm{CS}+i\thinspace\mathrm{Vol}/2\pi$ 가 되고, 그 허수부가 지수적 증가를 준다. Witten 점근 추측에서 진폭에 [Reidemeister 비틀림](reidemeister-torsion.md)이 나타나는 것처럼, 정련된 판본의 상수 $c$ 에도 비틀림이 나타날 것으로 예측된다.

## 연결된 추측

- **양자 모듈러성 추측(quantum modularity conjecture).** Zagier 는 유리수 $x$ 에서 $J(x)=\langle K\rangle_N$ 꼴로 정의한 함수의 로그가 모듈러 변환 $x\mapsto(ax+b)/(cx+d)$ 에서 매끄러운 함수의 점근급수만큼만 바뀐다고 추측했다. $x=1/N\to 0$ 에서 이 점근의 첫 항이 볼륨 추측이다.
- **AJ 추측(AJ conjecture).** 색 Jones 다항식이 만족하는 $q$ 차분방정식에서 $q=1$ 로 둔 다항식이 $A$ 다항식(A-polynomial)과 같다는 추측이다. $A$ 다항식은 여집합의 $\mathrm{SL}\_2(\mathbb C)$ 표현에서 정의된다.
- [Resurgence 이론](resurgence.md)에서는 $\langle K\rangle_N$ 의 $1/N$ 점근급수가 발산하고, 그 Borel 합의 특이점들의 작용값 가운데 하나가 $\mathrm{Vol}+i\thinspace\mathrm{CS}$ 다.

# 활용

## 8 자매듭의 수렴 속도

정련된 판본에서 로그를 취하면

$$
\frac{2\pi}N\log\langle 4_1\rangle_N=\mathrm{Vol}+\frac{3\pi\log N}{N}+\frac{2\pi\log c}{N}+O\Big(\frac1{N^2}\Big)
$$

이다. 둘째 항 때문에 좌변은 부피로 $\log N/N$ 의 속도로만 다가간다. 좌변에서 $3\pi\log N/N$ 을 빼면 오차가 $O(1/N)$ 이 된다.

## 쌍곡 부피와 양자 불변량

- 색 Jones 다항식은 교차점 규칙으로 계산되므로, 추측이 참이면 쌍곡 부피가 매듭 도식의 조합적 계산에서 극한으로 얻어진다.
- 단체적 부피가 $0$ 인지 아닌지가 $\vert J_N\vert$ 의 증가가 다항식적인지 지수적인지로 갈린다. 이것이 풀린 매듭 검출의 근거다.
- 복소 임계점을 다루려면 $\mathrm{SU}(2)$ 대신 $\mathrm{SL}\_2(\mathbb C)$ Chern–Simons 이론이 필요하고, 이 방향의 정식화가 정련된 판본이다.

[^1]: R. Kashaev, *The hyperbolic volume of knots from the quantum dilogarithm*, Lett. Math. Phys. **39** (1997), 269–275. H. Murakami, J. Murakami, *The colored Jones polynomials and the simplicial volume of a knot*, Acta Math. **186** (2001), 85–104.
[^2]: H. Murakami, *An introduction to the volume conjecture*, in *Interactions between Hyperbolic Geometry, Quantum Topology and Number Theory*, Contemp. Math. **541** (2011). 정련된 판본은 H. Murakami, J. Murakami, M. Okamoto, T. Takata, Y. Yokota, *Kashaev's conjecture and the Chern–Simons invariants of knots and links*, Experiment. Math. **11** (2002). $5_2$ 는 T. Ohtsuki, Quantum Topol. **7** (2016), 교차수 6 은 T. Ohtsuki, Y. Yokota, Math. Proc. Cambridge Philos. Soc. **165** (2018).
[^3]: S. Bigelow, *Does the Jones polynomial detect the unknot?*, J. Knot Theory Ramifications **11** (2002), 493–505.

# 연관 문서

## 선수지식

- [매듭 불변량](knot-invariants.md)
- [Lobachevsky 함수](lobachevsky-function.md)
- [쌍곡 3 다양체](hyperbolic-3-manifolds.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #differential_geometry #computation
