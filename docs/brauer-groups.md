# Brauer 군

# 개요

**Brauer 군(Brauer group)** $\mathrm{Br}(K)$ 는 체 $K$ 위의 중심단순대수를 Brauer 동치로 분류하는 군이며, [유체론](class-field-theory.md)이 이 군을 완전히 계산한다. 유리수 위에서 $i^2=a$, $j^2=b$, $ij=-ji$ 로 정한 사원수 대수가 $2\times 2$ [행렬](matrices.md)대수와 같은지는, [실수](real-numbers.md)와 각 소수 $p$ 에서 따로 확인한 결과를 모으면 정해진다. Brauer 군은 이런 대수를 각 자리에서의 불변량으로 적고, 그 불변량들의 합이 $0$ 이라는 완전열로 국소 정보와 전역 정보의 관계를 계산한다.

# 직관

$ax^2+by^2=z^2$ 이 모든 [실수](real-numbers.md)와 $p$ 진수에서 자명하지 않은 해를 가질 때 $\mathbb Q$ 에서도 갖는지 묻는다. 이 이차형식은 [사원수 대수](quaternion-algebras.md) $(a,b)\_{\mathbb Q}$ 의 노름형식이고, 해가 있는 것과 대수가 $2\times2$ [행렬](matrices.md)대수 $M_2(\mathbb Q)$ 와 동형인 것이 동치다. 이차형식의 해를 묻는 일이 대수 하나가 행렬대수인지 묻는 일로 바뀐다.

$a=b=-1$ 이면 $-x^2-y^2=z^2$ 은 실수에서 $x=y=z=0$ 만 해로 갖는다. $2$ 진수에서도 자명하지 않은 해가 없고, 홀수 소수 $p$ 의 $p$ 진수에서는 해가 있다. 해가 없는 자리가 실수 자리와 $2$ 두 곳이다.

대역적으로 정의된 사원수 대수에서는 해가 없는 자리의 개수가 언제나 짝수이고, 그래서 한 자리에서만 해가 없는 이차형식은 존재하지 않는다. 자리마다 대수가 행렬대수인지를 수 하나로 적고 그 합을 보는 것이 Brauer 군의 계산이다.

# 정의

## 중심단순대수와 Brauer 군

$K$ 위의 유한차원 대수 $A$ 가 **중심단순(central simple)** 이라는 것은 중심이 정확히 $K$ 이고 양쪽 아이디얼이 $0$ 과 $A$ 뿐이라는 뜻이다. 행렬대수 $M_n(K)$ 와 $\mathbb R$ 위의 Hamilton 사원수 $\mathbb H$ 가 중심단순대수다. $\mathbb C$ 는 $\mathbb R$ 위에서 중심이 $\mathbb C$ 라 중심단순이 아니다.

두 중심단순대수 $A,B$ 가 **Brauer 동치(Brauer equivalent)** 라는 것은 $M_m(A)\cong M_n(B)$ 인 $m,n$ 이 있다는 뜻이다. $M_2(K)$ 와 $K$ 는 Brauer 동치다. 동치류 전체에 텐서곱으로 군 구조를 준다.

$$
[A]\cdot[B]=[A\otimes_KB],\qquad [A]^{-1}=[A^{\mathrm{op}}],\qquad 1=[M_n(K)]
$$

이 군이 **Brauer 군** $\mathrm{Br}(K)$ 다. $[A]=1$ 이면 $A$ 가 **분해된다(split)** 고 한다.

## 사원수대수

$a,b\in K^\times$ 에 대해 **사원수대수(quaternion algebra)** 를 다음으로 둔다.

$$
(a,b)\_K=K\langle i,j\rangle/(i^2=a,\ j^2=b,\ ij=-ji)
$$

$K=\mathbb R$ 이고 $a=b=-1$ 이면 Hamilton 의 사원수 $\mathbb H$ 다. $(1,b)\_K$ 는 $i\mapsto\mathrm{diag}(1,-1)$, $j\mapsto\begin{pmatrix}0&b\cr1&0\end{pmatrix}$ 로 $M_2(K)$ 와 동형이다.

## Hilbert 기호

국소체 $K_v$ 에서 **Hilbert 기호(Hilbert symbol)** 는 사원수대수의 분해 여부를 $\pm1$ 로 적은 것이다.

$$
(a,b)\_v=\begin{cases}+1&ax^2+by^2=z^2\ \text{가 }K_v\ \text{에서 자명하지 않게 풀린다}\cr-1&\text{그렇지 않다}\end{cases}
$$

직관 절의 계산으로 $(-1,-1)\_\infty=(-1,-1)\_2=-1$ 이고, 홀수 소수 $p$ 에서 $(-1,-1)\_p=1$ 이다.

## 불변량과 분기 자리

국소체 $K_v$ 의 **불변량 사상(invariant map)** $\mathrm{inv}\_v\colon\mathrm{Br}(K_v)\to\mathbb Q/\mathbb Z$ 는 [국소 유체론](local-class-field-theory.md)이 주는 사상이다. 사원수대수의 불변량은 분해되면 $0$, 아니면 $1/2$ 이다. 대역체 $K$ 위의 사원수대수의 불변량이 $1/2$ 인 자리를 **분기 자리(ramified place)** 라 한다. $(-1,-1)\_{\mathbb Q}$ 의 분기 자리는 $\infty$ 와 $2$ 다.

# 성질

## Wedderburn 정리와 코호몰로지

Wedderburn 정리(Wedderburn's theorem)에 따라 중심단순대수는 $A\cong M_n(D)$ 이고 $D$ 는 $K$ 위의 [나눗셈 대수](division-algebras.md)로 유일하게 정해진다. 그래서 Brauer 동치는 같은 $D$ 를 갖는다는 것과 같고, $\mathrm{Br}(K)$ 의 원소는 $K$ 위의 중심 나눗셈대수와 일대일로 대응한다. 사원수대수는 4 차원이므로 $M_2(K)$ 와 동형이거나 나눗셈대수다. $(a,b)\_K\otimes(a,b)\_K\cong M_4(K)$ 라 $\mathrm{Br}(K)$ 에서 위수가 많아야 $2$ 다.

[코호몰로지](cohomology.md)로는 $\mathrm{Br}(K)\cong H^2(\mathrm{Gal}(\bar K/K),\bar K^\times)$ 이고, 이 동형으로 유체론의 계산이 대수의 분류에 적용된다.

## 노름형식

$$
(a,b)\_K\cong M_2(K)\quad\Longleftrightarrow\quad ax^2+by^2=z^2\ \text{가 }K\text{ 에서 자명하지 않은 해를 갖는다}
$$

우변의 이차형식은 $i,j$ 의 일차결합 $xi+yj$ 의 제곱이 $ax^2+by^2$ 이라는 데서 나온 노름형식이다.

## Hilbert 기호의 공식

$\mathbb Q$ 위에서 $a=p^\alpha u$ 와 $b=p^\beta v$ ($u,v$ 는 $p$ 진 단원)로 쓰면 홀수 소수 $p$ 에서

$$
(a,b)\_p=(-1)^{\alpha\beta\varepsilon(p)}\left(\frac up\right)^{\negthinspace\beta}\left(\frac vp\right)^{\negthinspace\alpha},\qquad
\varepsilon(p)=\frac{p-1}2\bmod2
$$

이고, $p=2$ 에서는 $\varepsilon(u)=\frac{u-1}2$ 와 $\omega(u)=\frac{u^2-1}8$ 로 다음과 같다.

$$
(a,b)\_2=(-1)^{\varepsilon(u)\varepsilon(v)+\alpha\omega(v)+\beta\omega(u)}
$$

실수 자리에서는 $a,b$ 가 둘 다 음수일 때만 $-1$ 이다. $a=b=-1$ 에서 $p=2$ 의 지수는 $\varepsilon(-1)^2=1$ 이라 $(-1,-1)\_2=-1$ 이다.

## 국소 불변량

국소 유체론에서 불변량 사상은 동형이다.

$$
\mathrm{inv}\_v\colon\mathrm{Br}(K_v)\xrightarrow{\ \sim\ }
\begin{cases}\mathbb Q/\mathbb Z&v\ \text{유한}\cr \tfrac12\mathbb Z/\mathbb Z&v\ \text{실수}\cr 0&v\ \text{복소}\end{cases}
$$

## 기본 완전열

[유체론](class-field-theory.md)의 Brauer 군 판은 대역체 $K$ 에 대해 다음이 완전열이라는 진술이다. 가운데 사상은 [아델](adeles.md)처럼 모든 자리를 함께 본다.

$$
0\to\mathrm{Br}(K)\to\bigoplus_v\mathrm{Br}(K_v)\xrightarrow{\ \sum\mathrm{inv}\_v\ }\mathbb Q/\mathbb Z\to0
$$

왼쪽의 단사성이 Albert–Brauer–Hasse–Noether 정리(Albert–Brauer–Hasse–Noether theorem)다[^1]. 모든 자리에서 분해되는 중심단순대수는 분해된다는 뜻이며 중심단순대수에 대한 [Hasse 원리](hasse-principle.md)다. 가운데의 완전성이 불변량 합 공식이고, 오른쪽의 전사성은 불변량을 미리 정해 대수를 만들 수 있다는 존재정리다.

사원수대수에서 합 공식은 Hilbert 기호의 곱 공식 $\prod_v(a,b)\_v=1$ 이며, 분기 자리의 개수가 짝수라는 뜻이다. $(-1,-1)\_{\mathbb Q}$ 의 분기 자리가 두 개인 것이 그 예다. 이 곱 공식은 [이차 상호법칙](quadratic-reciprocity.md)과 동치다.

## 원뿔곡선의 Hasse 원리

Hasse–Minkowski 정리(Hasse–Minkowski theorem)는 다음 진술이다. $K$ 위의 이차형식 $q$ 가 $q=0$ 의 자명하지 않은 해를 $K$ 에서 갖는 것과 모든 $K_v$ 에서 갖는 것이 동치다.

차수가 올라가면 같은 원리가 성립하지 않는다. Selmer 의 $3x^3+4y^3+5z^3=0$ 은 모든 자리에서 풀리지만 유리수해가 없다.

세 변수 대각형식 $ax^2+by^2+cz^2=0$ 으로 좁히면 사원수대수 $(-ac,-bc)$ 의 Hasse 원리다. 실제 판정은 Hilbert 기호 계산이고, $a,b,c$ 를 나누는 소수와 $2$ 와 실수 자리만 보면 되므로 유한하다.

Legendre 의 판정법(Legendre's theorem)도 같은 내용이다. $a,b,c$ 가 제곱인자가 없고 서로소이면 해가 있을 필요충분조건은 부호가 모두 같지 않고 $-bc$ , $-ac$ , $-ab$ 가 각각 $|a|,|b|,|c|$ 를 법으로 이차잉여인 것이다.

## 노름 정리와의 관계

$L/K$ 가 차수 $n$ 의 순환확대면 $a\in K^\times$ 가 $L$ 에서의 노름인지 여부가 순환대수(cyclic algebra)의 분해 여부와 같으므로 Hasse 노름 정리(Hasse norm theorem)가 유도된다.

$$
a\in N_{L/K}L^\times\quad\Longleftrightarrow\quad a\in N_{L_w/K_v}L_w^\times\ \ \text{(모든 }v\text{)}
$$

순환이 아니면 깨진다. $L=\mathbb Q(\sqrt{13},\sqrt{17})$ 에서 $5^2$ 은 모든 자리에서 국소 노름이지만 $L$ 의 노름이 아니다. 국소 노름과 대역 노름의 차이는 $\mathrm{Sha}$ 꼴의 군으로 적히고, 이 군도 Brauer 군으로 계산된다.

## Brauer–Manin 장애

Brauer–Manin 장애(Brauer–Manin obstruction)는 다음 집합으로 정의된다. $X/K$ 가 매끄러운 사영다양체일 때 아델 점 집합 안에 부분집합을 정의한다.

$$
X(\mathbb A_K)^{\mathrm{Br}}=\Big\lbrace(P_v)\in X(\mathbb A_K)\ :\ \sum_v\mathrm{inv}\_v\thinspace\alpha(P_v)=0\ \ \text{모든 }\alpha\in\mathrm{Br}(X)\Big\rbrace
$$

$X(K)\subset X(\mathbb A_K)^{\mathrm{Br}}\subset X(\mathbb A_K)$ 가 항상 성립한다. 가운데가 비어 있는데 오른쪽이 비어 있지 않으면 Hasse 원리가 깨지고 그 깨짐이 Brauer 군으로 설명된다.

- 원뿔곡선과 이차형식에서는 $\mathrm{Br}(X)=\mathrm{Br}(K)$ 라 장애가 없고 Hasse 원리가 성립한다.
- 유리곡면과 여러 곡면에서는 장애가 나타나고, Colliot-Thélène 과 Sansuc 은 유리 연결 다양체에서 이 장애가 유일한 장애라고 추측했다.
- Skorobogatov 는 Brauer–Manin 장애로 설명되지 않는 Hasse 원리의 실패를 쌍타원 곡면(bielliptic surface)에서 만들었다. 이 예는 하강(descent)을 결합한 장애로 설명된다. 곡선에서는 Brauer–Manin 장애가 유일한 장애라는 것이 Scharaschkin 과 Skorobogatov 의 추측이다.

# 활용

- 이차형식의 분류: 대역체 위의 이차형식은 차원, 판별식, Hasse 불변량(Hasse invariant)으로 완전히 분류되고, 그 Hasse 불변량이 Hilbert 기호의 곱이다.
- [타원곡선](elliptic-curves.md)의 하강: [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)이 아델적 코호몰로지로 정의되며, $\mathrm{Sha}$ 의 원소가 Hasse 원리를 깨는 주동차공간이다. Cassels–Tate 쌍대성(Cassels–Tate duality)이 Brauer 군의 곱 공식과 같은 구조를 갖는다.
- 유리점의 존재 판정: 곡면이나 고차원 다양체에 유리점이 있는지 판정하는 알고리즘이 국소 조건과 Brauer–Manin 계산을 결합한다.
- 나눗셈대수의 분류: $K$ 위의 나눗셈대수 전체를 불변량의 모음으로 적을 수 있다는 것이 위 완전열의 내용이다.

[^1]: 완전열과 Albert–Brauer–Hasse–Noether 정리는 Cassels–Fröhlich, *Algebraic Number Theory* (1967) 의 6장과 7장. Hilbert 기호의 명시적 공식과 Hasse–Minkowski 정리는 J.-P. Serre, *A Course in Arithmetic* (1973) 3장과 4장. Brauer–Manin 장애는 Yu. Manin 의 1970년 ICM 강연에서 도입되었고, Skorobogatov, *Torsors and Rational Points* (2001) 가 표준 참고서다.

# 연관 문서

## 선수지식

- [유체론](class-field-theory.md)
- [아델](adeles.md)
- [나눗셈 대수](division-algebras.md)

## 더 알아보기

- [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)
- [Deuring 대응](deuring-correspondence.md)

#number_theory #ring_theory #algebra
