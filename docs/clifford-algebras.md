# Clifford 대수

# 개요

Clifford 대수는 [이차형식](quadratic-forms.md)을 가진 벡터 공간에서 벡터의 제곱이 그 이차형식의 값이 되도록 강제해 얻는 결합대수다. [외대수](exterior-algebra.md)가 벡터의 제곱을 $0$ 으로 놓은 것이고, 그 자리에 이차형식을 놓은 것이 Clifford 대수다.

차원은 외대수와 같은 $2^n$ 이지만 곱이 다르고, 가역원이 많아 직교군의 이중덮개를 이 대수 안에서 만들 수 있다.

# 직관

$\mathbb R^n$ 에서 Laplace 작용소 $\sum_i\partial_i^2$ 를 1계 작용소의 제곱으로 적으려 한다. 계수를 $e_i$ 로 두고 $D=\sum_i e_i\partial_i$ 를 제곱하면 다음이 나온다.

$$
D^2=\sum_i e_i^2\thinspace\partial_i^2+\sum_{i\lt j}(e_ie_j+e_je_i)\thinspace\partial_i\partial_j
$$

$D^2=-\sum_i\partial_i^2$ 가 되려면 $e_i^2=-1$ 과 $e_ie_j=-e_je_i$ 가 필요하다. $n=1$ 에서 이 조건을 만족하는 $e_1$ 은 복소수의 $i$ 이고, $n=2$ 에서 $1,e_1,e_2,e_1e_2$ 는 사원수의 기저가 된다. $n$ 이 커지면 실수나 복소수 안에서는 계수를 찾을 수 없으므로 이 관계식만으로 대수를 새로 만든다.

# 정의

## Clifford 대수

체 $K$ 위의 벡터 공간 $V$ 와 이차형식 $q$ 에 대해 **Clifford 대수**는 텐서대수를 다음 아이디얼로 나눈 몫이다.[^1]

$$
\mathrm{Cl}(V,q)=T(V)/\langle v\otimes v-q(v)\thinspace 1:v\in V\rangle
$$

$V$ 의 직교기저 $e_1,\dots,e_n$ 을 잡으면 관계식은 $e_i^2=q(e_i)$ 와 $e_ie_j=-e_je_i$ $(i\ne j)$ 다. 곱 $e\_{i_1}\cdots e\_{i_k}$ 들이 $i_1\lt \dots\lt i_k$ 인 범위에서 기저를 이루므로 $\dim\mathrm{Cl}(V,q)=2^n$ 이다.

$q$ 가 부호수 $(p,r)$ 인 실 이차형식일 때 $\mathrm{Cl}\_{p,r}$ 로 적는다. $\mathrm{Cl}\_{0,1}=\mathbb C$ 이고 $\mathrm{Cl}\_{0,2}=\mathbb H$ 다.

## 등급과 대합

$T(V)$ 의 $\mathbb Z$ 등급은 아이디얼이 짝수 차수 원소로 생성되므로 $\mathbb Z/2$ 등급으로만 내려온다. 짝수 부분을 $\mathrm{Cl}^0$ 이라 하고, 이것은 부분대수이며 차원이 $2^{n-1}$ 이다.

$v\mapsto -v$ 가 유도하는 자기동형을 $\alpha$, $v_1\cdots v_k\mapsto v_k\cdots v_1$ 을 주는 반자기동형을 전치라 한다. 둘을 합성한 것이 **공액**이고, Spin 군을 정의하는 데 쓴다.

## Pin 군과 Spin 군

$q$ 가 양의 정부호일 때, $\mathrm{Cl}\_{n,0}$ 의 가역원 $u$ 가 $u V u^{-1}=V$ 를 만족하는 것들의 군을 생각한다. $V$ 의 단위벡터들의 곱으로 이루어진 부분군이 $\mathrm{Pin}(n)$ 이고, 그 가운데 짝수 개의 곱이 $\mathrm{Spin}(n)$ 이다.

# 성질

## 보편성

**정리.** 선형사상 $f\colon V\to A$ 가 결합대수 $A$ 에서 $f(v)^2=q(v)1$ 을 만족하면, 대수 준동형 $\tilde f\colon\mathrm{Cl}(V,q)\to A$ 가 유일하게 있어 $V$ 위에서 $f$ 와 같다.

증명의 요지. $f$ 를 텐서대수로 유일하게 확장하면 조건이 아이디얼의 생성원을 $0$ 으로 보내므로 몫으로 내려온다. ∎

이 성질로 Clifford 대수는 동형을 빼고 유일하고, 표현을 만들 때 관계식만 확인하면 된다.

## 외대수와의 관계

**정리.** $\mathrm{Cl}(V,q)$ 에 생성원의 개수로 주는 필터를 넣으면 연관 등급대수가 외대수 $\Lambda V$ 와 동형이다.

증명의 요지. $e_ie_j+e_je_i=2b(e_i,e_j)$ 에서 우변은 생성원 개수가 둘 낮으므로 필터 등급에서 사라지고 반교환 관계만 남는다. 차원이 둘 다 $2^n$ 이므로 동형이다. ∎

$q=0$ 이면 Clifford 대수가 외대수와 같다.

## 주기성

**정리.** 복소 Clifford 대수는 $\mathrm{Cl}\_n(\mathbb C)\cong\mathrm{Cl}\_{n-2}(\mathbb C)\otimes M_2(\mathbb C)$ 를 만족한다. 따라서 $n$ 이 짝수면 $M\_{2^{n/2}}(\mathbb C)$ 이고 홀수면 그 두 벌의 직합이다.

증명의 요지. $f_1=e_1e_2e_3,\dots$ 꼴로 생성원을 다시 잡아 앞의 둘이 $M_2(\mathbb C)$ 를 생성하고 나머지가 그와 가환하는 부분대수를 생성하도록 만든다. 실 Clifford 대수는 같은 방식으로 주기가 $8$ 이다. ∎

이 주기성이 Bott 주기성과 $\mathbb Z/8$ 값 실 K 이론의 꼴을 준다.

## 직교군의 이중덮개

**정리.** $\mathrm{Spin}(n)\to\mathrm{SO}(n)$, $u\mapsto(v\mapsto uvu^{-1})$ 은 전사이고 핵이 $\lbrace\pm 1\rbrace$ 다.

증명의 요지. 단위벡터 $w$ 에 대해 $v\mapsto -wvw^{-1}$ 은 $w$ 에 수직인 초평면에 대한 반사다. Cartan–Dieudonné 정리가 직교변환을 반사의 곱으로 적고, 짝수 개의 반사가 $\mathrm{SO}(n)$ 을 준다. 핵에 든 원소는 $V$ 와 가환하는 짝수 차수 원소이므로 상수뿐이고, 단위벡터의 곱이라는 조건에서 $\pm 1$ 만 남는다. ∎

$n\ge 3$ 에서 $\mathrm{Spin}(n)$ 은 연결이고 단연결이므로 $\mathrm{SO}(n)$ 의 보편덮개다.

## 스피너 표현

$n=2k$ 에서 $\mathrm{Cl}\_n(\mathbb C)\cong M\_{2^k}(\mathbb C)$ 이므로 기약표현이 차원 $2^k$ 인 것 하나다. 이것을 $\mathrm{Spin}(n)$ 으로 제한하면 $\mathrm{Cl}^0$ 의 두 기약 성분으로 갈라지고, 각각을 반스피너 표현이라 한다. $\mathbb Z/2$ 의 생성원 $-1$ 이 항등이 아니게 작용하므로 이 표현은 $\mathrm{SO}(n)$ 의 표현으로 내려오지 않는다.

# 활용

- [스핀 구조](spin-structures.md)의 스피너 다발이 위 스피너 표현의 결합다발이고, [Dirac 작용소](dirac-operator.md)가 공변미분에 Clifford 곱을 합성한 것이다. 직관 절의 계산이 다양체 위에서 그 작용소의 제곱을 Laplace 작용소와 곡률항으로 적는 근거다.
- 복소수와 사원수가 $\mathrm{Cl}\_{0,1}$ 과 $\mathrm{Cl}\_{0,2}$ 다. 사원수의 단위군이 $\mathrm{Spin}(3)$ 이고 이것이 $\mathrm{SU}(2)$ 와 같다.
- [Witt 환](witt-ring.md)의 원소를 Clifford 대수의 불변량으로 구분한다. 판별식과 Hasse–Witt 불변량이 $\mathrm{Cl}(V,q)$ 의 중심과 $\mathrm{Cl}^0$ 의 구조로 읽힌다.
- 실 Clifford 대수의 주기 $8$ 이 실 Bott 주기성과 맞물린다. 벡터다발의 K 이론 쪽 계산에서 이 주기가 안정 호모토피군의 꼴을 정한다.

[^1]: H. Blaine Lawson and Marie-Louise Michelsohn, *Spin Geometry*, Princeton University Press (1989), Ch. I. Clifford 대수의 구성, 분류와 주기성, Pin 군과 Spin 군의 정의가 이 장에 있다.

# 연관 문서

## 선수지식

- [외대수](exterior-algebra.md)
- [이차형식](quadratic-forms.md)

## 더 알아보기

- [Dirac 작용소](dirac-operator.md)

#algebra #linear_algebra #differential_geometry #group_theory
