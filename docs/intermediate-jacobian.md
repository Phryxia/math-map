# 중간 Jacobi 다양체

# 개요

**중간 Jacobi 다양체(intermediate Jacobian)** 는 삼차원 다양체의 셋째 코호몰로지를 정수 격자로 접어 만든 복소 원환체다. 종수 $g$ 인 곡선에서는 첫째 코호몰로지로 $g$ 차원의 [Jacobi 다양체](jacobian-variety.md)를 만들었다. $\mathbb P^4$ 의 매끄러운 삼차 초곡면에서는 셋째 Betti 수가 $10$ 이므로 같은 방법으로 $5$ 차원 원환체가 나온다. 이 원환체가 곡선들의 Jacobi 다양체의 곱인지를 보면, 다양체를 유리함수로 $\mathbb P^3$ 과 맞바꿀 수 있는지를 판정한다.

# 직관

종수 $g$ 인 곡선 $C$ 의 첫째 코호몰로지는 $H^1(C,\mathbb C)=H^{1,0}\oplus H^{0,1}$ 로 쪼개지고 두 조각은 각각 $g$ 차원이다. 정수 코호몰로지 $H^1(C,\mathbb Z)\cong\mathbb Z^{2g}$ 를 $H^{0,1}$ 으로 사영하면 격자가 되고, 몫 $H^{0,1}/H^1(C,\mathbb Z)$ 가 $g$ 차원 복소 원환체 $J(C)$ 다.

삼차원 다양체 $X$ 에서는 셋째 코호몰로지가 네 조각으로 쪼개진다.

$$
H^3(X,\mathbb C)=H^{3,0}\oplus H^{2,1}\oplus H^{1,2}\oplus H^{0,3}
$$

곡선에서 아래쪽 절반 $H^{0,1}$ 을 쓴 것처럼 아래쪽 절반 $H^{1,2}\oplus H^{0,3}$ 을 정수 격자 $H^3(X,\mathbb Z)$ 로 나눈다. 삼차 초곡면은 $h^{3,0}=0$, $h^{2,1}=h^{1,2}=5$ 이므로 몫은 $H^{1,2}/H^3(X,\mathbb Z)$ 이고 $5$ 차원이다.

# 정의

## Griffiths 중간 Jacobi 다양체

$X$ 를 $3$ 차원 콤팩트 [Kähler 다양체](kahler-manifolds.md)라 하고, $F^2H^3=H^{3,0}\oplus H^{2,1}$ 이라 하자. $X$ 의 중간 Jacobi 다양체는 다음 몫이다.

$$
J(X)=\frac{H^3(X,\mathbb C)}{F^2H^3+H^3(X,\mathbb Z)}
$$

$H^3(X,\mathbb C)/F^2H^3\cong H^{1,2}\oplus H^{0,3}$ 이고 $H^3(X,\mathbb Z)$ 의 상이 그 안의 격자이므로 $J(X)$ 는 $b_3/2$ 차원 복소 원환체다. 같은 식을 곡선의 $H^1$ 과 $F^1H^1=H^{1,0}$ 에 쓰면 $J(C)$ 가 나온다.

## Abel–Jacobi 사상

$X$ 위에서 호몰로지가 $0$ 인 대수적 $1$ 차원 순환 $Z$ 는 어떤 $3$ 차원 사슬 $\Gamma$ 의 경계다. $Z$ 에 $\Gamma$ 위의 적분을 대응시키는 다음 사상을 **Abel–Jacobi 사상(Abel–Jacobi map)** 이라 한다.

$$
Z=\partial\Gamma\ \longmapsto\ \Bigl(\omega\mapsto\int_\Gamma\omega\Bigr)\in\frac{(F^2H^3)^\ast}{H_3(X,\mathbb Z)}\cong J(X)
$$

$\Gamma$ 를 바꾸면 적분이 $H_3(X,\mathbb Z)$ 의 원소만큼 달라지므로 값은 몫에서 정해진다. 곡선에서는 점 두 개의 차 $p-q$ 를 $p$ 에서 $q$ 까지의 적분으로 보내는 Abel–Jacobi 사상이다.

# 성질

## 아벨 다양체가 되는 경우

$H^{3,0}(X)=0$ 이면 $J(X)=H^{1,2}/H^3(X,\mathbb Z)$ 이고, $H^3$ 위의 교차 형식이 주편극(principal polarization)을 주어 $J(X)$ 는 주편극 [아벨 다양체](abelian-varieties.md)다[^1]. [삼차원 Fano 다양체](fano-threefolds.md)는 $H^{3,0}=0$ 이므로 언제나 이 경우다. $H^{3,0}\ne 0$ 이면 교차 형식이 정부호가 아니어서 $J(X)$ 는 일반적으로 대수다양체가 아니다.

## 부풀림 공식

점 하나에서 부풀리면 $J(X)$ 가 바뀌지 않고, 매끄러운 곡선 $C$ 를 따라 부풀리면 $J(C)$ 가 곱해진다.

$$
J(\mathrm{Bl}\_CX)\cong J(X)\times J(C)
$$

$\mathbb P^3$ 은 $H^3=0$ 이므로 $J(\mathbb P^3)=0$ 이다. $X$ 가 유리이면 쌍유리 사상을 점과 곡선의 부풀림으로 풀어 $J(X)$ 가 곡선들의 Jacobi 다양체의 곱이라는 것이 나온다[^2]. 이것이 Clemens–Griffiths 판정법(Clemens–Griffiths criterion)이다.

## 삼차 초곡면

$X$ 가 $\mathbb P^4$ 의 매끄러운 삼차 초곡면이면 $J(X)$ 는 $5$ 차원 주편극 아벨 다양체이고, $X$ 위의 직선들이 이루는 곡면 $F$ 의 [Albanese 다양체](albanese-variety.md)와 같다. $J(X)$ 의 theta 인자(theta divisor)는 원점에 고립된 특이점 하나만 가진다. 종수 $5$ 곡선의 Jacobi 다양체에서는 [Riemann 특이점 정리](riemann-singularity-theorem.md)로 theta 인자의 특이점이 $1$ 차원 이상으로 모이므로, $J(X)$ 는 곡선들의 Jacobi 다양체의 곱이 아니고 $X$ 는 유리가 아니다[^2].

$J(X)$ 와 그 theta 인자로부터 $X$ 가 복원된다. 이것이 삼차 초곡면의 Torelli 정리(Torelli theorem)다[^2].

# 활용

- 유리성 판정. 삼차원 Fano 다양체와 원뿔다발의 유리성을 중간 Jacobi 다양체가 곡선들의 Jacobi 다양체의 곱인지로 판정한다.
- Prym 다양체. 삼차 초곡면을 직선에서 사영하면 평면 오차곡선 위의 원뿔다발이 되고, $J(X)$ 는 판별 곡선의 이중 덮개가 주는 [Prym 다양체](prym-varieties.md)와 같다.
- 대수적 순환. Griffiths 는 일반적인 오차 삼차원 초곡면에서 Abel–Jacobi 사상의 값으로, 호몰로지가 $0$ 이지만 대수적으로 $0$ 과 동치가 아닌 $1$ 차원 순환을 찾았다[^3].

[^1]: C. Voisin, *Hodge Theory and Complex Algebraic Geometry I*, Cambridge University Press, 2002, 12 장.
[^2]: C. H. Clemens, P. A. Griffiths, "The intermediate Jacobian of the cubic threefold", Annals of Mathematics 95 (1972), 281–356.
[^3]: P. A. Griffiths, "On the periods of certain rational integrals I, II", Annals of Mathematics 90 (1969), 460–541.

# 연관 문서

## 선수지식

- [Jacobi 다양체](jacobian-variety.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #algebra #differential_geometry
