# 교차 이론

# 개요

**교차 이론(intersection theory)** 은 도형들이 만나는 점을 중복도를 붙여 세는 이론이다. 평면에서 원과 직선은 두 점에서 만나거나, 한 점에서 접하거나, 만나지 않는데, 접점을 두 번 세고 [복소수](complex-numbers.md) 좌표의 점까지 세면 언제나 $2$ 개에서 만난다. 교차 이론은 도형을 연속적으로 움직여도 변하지 않는 부류로 묶고 그 부류의 곱으로 만나는 수를 계산해, 이런 개수가 늘 같게 나오게 한다.

# 직관

교차 이론은 대수다양체 안의 부분다양체들이 만나는 자리를 중복도를 붙여 세는 이론이다. 부분다양체의 형식적 합을 연속 변형에 해당하는 동치로 나눈 Chow 군을 만들고, 다양체가 매끄러우면 교차가 그 위의 곱이 되어 Chow 환(Chow ring)을 이룬다.

[사영다양체](projective-varieties.md)의 Bézout 정리는 사영공간의 Chow 환에서 한 번 곱하는 계산이다. 복소수 위에서는 Chow 환이 [코호몰로지](cohomology.md) 환으로 가고 교차가 컵곱으로 가므로, [횡단성](transversality.md)으로 정의한 위상적 교차수와 같은 값을 준다.

사영평면에서 직선 $y=0$ 과 원뿔곡선 $yz=x^2-cz^2$ 의 교점을 센다. $y=0$ 을 넣으면 $x^2=cz^2$ 이므로 $c\ne 0$ 이면 교점이 $(\pm\sqrt c:0:1)$ 둘이고, $c=0$ 이면 $(0:0:1)$ 하나뿐이다. Bézout 정리가 말하는 $1\cdot 2=2$ 를 $c=0$ 에서도 맞추려면 $c=0$ 의 교점을 두 번 세야 한다.

두 번 세는 근거는 교점에서의 국소적인 셈에서 나온다. 아핀 조각 $z=1$ 에서 원점 근처의 다항식 함수를 두 방정식 $y$ 와 $y-x^2$ 으로 나누면 $k\lbrack x\rbrack/(x^2)$ 이 남고, 이것은 $k$ 위에서 $1$ 과 $x$ 를 기저로 하는 $2$ 차원 공간이다. $c\ne 0$ 이면 각 교점에서 같은 계산이 $1$ 차원 공간을 준다. 이 차원을 교점의 중복도로 삼으면 $c$ 가 어떤 값이든 합이 $2$ 다.

합이 $c$ 에 의존하지 않으므로 원뿔곡선을 계산하기 쉬운 것으로 바꿔도 된다. 차수 $2$ 인 다항식 $F$ 와 직선의 방정식 $L$ 에 대해 $F/L^2$ 은 사영평면 위의 함수이고, 그 영점은 곡선 $F=0$, 극은 직선 $L=0$ 을 두 번 센 것이다. 영점과 극으로 주어지는 두 형식적 합을 같은 것으로 보면 원뿔곡선은 직선 두 개와 같고, 직선과 직선은 한 점에서 만나므로 답은 $2$ 다.

부분다양체의 형식적 합을 이렇게 같은 것으로 보아 나눈 군이 Chow 군이고, 교차를 중복도로 센 것이 그 위의 곱이다.

# 정의

$X$ 를 체 $k$ 위의 대수다양체라 한다.

## 사이클과 유리 동치

$X$ 의 $r$ 차원 기약 부분다양체들을 기저로 하는 자유 아벨군 $Z\_r(X)$ 의 원소를 **$r$ 차원 사이클(cycle)** 이라 한다.

$W$ 가 $X$ 의 $r+1$ 차원 부분다양체이고 $f$ 가 $W$ 위의 $0$ 이 아닌 유리함수이면, $f$ 의 영점이 이루는 $r$ 차원 부분다양체들을 차수만큼 더하고 극이 이루는 것들을 차수만큼 뺀 사이클을 $\mathrm{div}(f)$ 라 쓴다. 이런 사이클들이 생성하는 부분군으로 나눈 몫

$$
A\_r(X)=Z\_r(X)/\langle\thinspace\mathrm{div}(f)\thinspace\rangle
$$

을 **Chow 군(Chow group)** 이라 하고, 같은 류에 속한 두 사이클을 **유리 동치(rational equivalence)** 라 한다.

$\mathbb P^1$ 에서는 두 점 $p=(a:1)$, $q=(b:1)$ 에 대해 $\mathrm{div}\bigl((x-az)/(x-bz)\bigr)=\lbrack p\rbrack-\lbrack q\rbrack$ 이므로 모든 점이 유리 동치이고 $A\_0(\mathbb P^1)\cong\mathbb Z$ 다.

## 교차 중복도

$X$ 가 매끄럽고 부분다양체 $V$, $W$ 의 교집합의 기약 성분 $Z$ 가 $\dim Z=\dim V+\dim W-\dim X$ 를 만족한다고 한다. $Z$ 에서의 국소환을 $\mathcal O=\mathcal O\_{X,Z}$, $V$ 와 $W$ 의 아이디얼을 $I\_V$, $I\_W$ 라 하면 **교차 중복도(intersection multiplicity)** 는

$$
i(Z;V\cdot W)=\sum_{j\ge 0}(-1)^j\thinspace\mathrm{length}\_{\mathcal O}\thinspace\mathrm{Tor}^{\mathcal O}\_j(\mathcal O/I\_V,\thinspace\mathcal O/I\_W)
$$

다(Serre 의 Tor 공식, Serre's Tor formula)[^1]. $\mathrm{Tor}$ 는 [유도 함자](derived-functors.md)이고, $\mathrm{length}$ 는 합성열의 길이다. $\mathcal O/I\_V$ 와 $\mathcal O/I\_W$ 가 [Cohen–Macaulay 환](cohen-macaulay-rings.md)이면 $j\ge 1$ 의 항이 모두 $0$ 이어서 $i(Z;V\cdot W)=\mathrm{length}\thinspace\mathcal O/(I\_V+I\_W)$ 이고, 직관 절의 계산이 이것이다.

## Chow 환

$X$ 가 $n$ 차원 매끄러운 다양체이면 $A^r(X)=A\_{n-r}(X)$ 로 쓰고, 위와 같이 만나는 두 부분다양체에 대해

$$
\lbrack V\rbrack\cdot\lbrack W\rbrack=\sum_Z i(Z;V\cdot W)\thinspace\lbrack Z\rbrack
$$

로 곱을 정한다. 그렇게 만나지 않는 쌍은 한쪽을 유리 동치인 사이클로 옮긴 뒤 곱한다. 결과의 류가 옮기는 방법과 무관하다는 것이 이동 보조정리(moving lemma)다[^2]. 이 곱으로 $A^\ast(X)=\bigoplus\_r A^r(X)$ 는 가환 등급환이 되고, 이것을 **Chow 환** 이라 한다.

# 성질

## 사영공간과 Bézout 정리

$H$ 를 초평면의 류라 하면

$$
A^\ast(\mathbb P^n)=\mathbb Z\lbrack H\rbrack/(H^{n+1})
$$

이다. 차수 $d$ 인 초곡면 $F=0$ 은 $F/L^d$ 의 $\mathrm{div}$ 로 $d$ 개의 초평면과 유리 동치이므로 류가 $dH$ 다.

**정리(Bézout 정리).** $\mathbb P^n$ 의 초곡면 $n$ 개의 차수가 $d\_1,\dots,d\_n$ 이고 교집합이 유한이면, 교점을 중복도로 센 개수는 $d\_1\cdots d\_n$ 이다.

증명의 요지. 교집합의 류는 $d\_1H\cdots d\_nH=d\_1\cdots d\_n\thinspace H^n$ 이고, $H^n$ 은 한 점의 류이며 차수가 $1$ 이다.

## 횡단 교차의 중복도

$V$ 와 $W$ 가 $Z$ 의 일반점에서 매끄럽고 거기서 접공간의 합이 $X$ 의 접공간 전체이면 $i(Z;V\cdot W)=1$ 이다. 이때 $I\_V+I\_W$ 가 $Z$ 의 아이디얼이 되고 길이가 $1$ 이다. 직관 절의 $c\ne 0$ 인 교점이 이 경우이고, $c=0$ 의 교점은 두 접선이 같아 횡단이 아니다.

## 코호몰로지와의 비교

$k=\mathbb C$ 이고 $X$ 가 매끄러운 사영다양체이면, 부분다양체의 류를 그 [Poincaré 쌍대성](poincare-duality.md) 쌍대로 보내는 사이클 사상

$$
\mathrm{cl}:A^r(X)\to H^{2r}(X;\mathbb Z)
$$

은 환 준동형이다[^2]. 차원의 합이 $\dim X$ 인 두 부분다양체의 교차수는 위상적 교차수와 같다. 복소 부분다양체의 횡단 교점에서는 방향이 항상 맞으므로 모든 교점이 $+1$ 을 더한다.

$\mathrm{cl}$ 은 동형이 아닐 수 있다. 종수 $1$ 이상의 곡선에서 $A^1$ 의 차수 $0$ 부분은 [Jacobi 다양체](jacobian-variety.md)의 점들이고 무한군이지만 그것이 가는 $H^2$ 의 원소는 $0$ 이다.

# 활용

- **열거 기하.** $\mathbb P^3$ 에서 일반 위치의 직선 넷과 모두 만나는 직선은 $2$ 개다. [Grassmann 다양체](grassmannian.md)의 Chow 환에서 Schubert 류의 곱으로 계산하고, [Schubert 계산](schubert-calculus.md)이 그 곱 규칙이다.
- **Riemann–Roch.** [Riemann–Roch 정리](riemann-roch.md)를 곡면으로 올린 판은 $\chi(\mathcal O(D))=\chi(\mathcal O)+\tfrac12 D\cdot(D-K)$ 이고, 우변에 인자 $D$ 와 표준인자 $K$ 의 교차수가 들어간다. 고차원의 Hirzebruch–Riemann–Roch 정리는 Chow 환의 Chern 류와 Todd 류의 곱으로 진술된다.
- **교차형식.** 복소 곡면에서 $A^1$ 위의 교차곱은 4 차원 다양체의 [교차형식](intersection-form.md)을 대수적 사이클로 제한한 것이다.
- **[토릭 다양체](toric-varieties.md).** Chow 환이 부채의 자료로 직접 계산되어 다면체의 부피와 격자점의 개수를 교차수로 쓴다.

[^1]: J.-P. Serre, *Algèbre locale, multiplicités*, Lecture Notes in Mathematics 11, Springer, 1965, V 장.
[^2]: W. Fulton, *Intersection Theory*, 2판, Springer, 1998, 1 장, 8 장, 11 장, 19 장. 유리 동치, 매끄러운 다양체의 교차곱, 이동 보조정리, 사이클 사상.

# 연관 문서

## 선수지식

- [사영다양체](projective-varieties.md)
- [횡단성](transversality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #topology #differential_geometry
