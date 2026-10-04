# 유리 표준형

# 개요

유리 표준형은 체 $k$ 위의 정사각행렬을 동반행렬 블록의 직합까지 옮긴 꼴이다. [Jordan 표준형](jordan-canonical-form.md)은 블록의 대각 성분이 고윳값이므로 특성다항식이 $k$ 안에서 일차식으로 쪼개져야 쓸 수 있다. 유리 표준형의 블록은 고윳값 대신 다항식의 계수를 성분으로 쓰므로 어떤 체에서도 만들 수 있고, 블록을 정하는 다항식들이 체 확대로 바뀌지 않는다.

# 직관

$\mathbb Q$ 위에서 $A=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 를 대각화하려 한다. 특성다항식은 $x^2+1$ 이고 $\mathbb Q$ 에는 그 근이 없다. 고윳값이 없으니 고유벡터도 없고, 대각행렬이든 Jordan 블록이든 대각 자리에 적을 수가 없다.

고윳값을 쓰지 않고 기저를 잡아 본다. $v=(1,0)$ 으로 두면 $Av=(0,1)$ 이고 두 벡터가 $\mathbb Q^2$ 의 기저다. $A(Av)=A^2v=-v$ 이므로 이 기저에서 $A$ 의 행렬은 둘째 열이 $(-1,0)$ 인 $\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 이다. 둘째 열의 성분 $-1,0$ 은 $A^2v+v=0$ 이라는 관계, 곧 $x^2+1$ 의 계수에서 그대로 나왔다.

$v,Av,A^2v,\dots$ 를 처음 일차종속이 생길 때까지 늘어놓으면 그 종속 관계가 $v$ 를 없애는 가장 낮은 차수의 모닉 다항식을 주고, 그 계수를 마지막 열에 적은 행렬이 블록 하나가 된다. 계수는 $k$ 안에 있으므로 근을 찾을 필요가 없다. 공간을 이런 블록들로 쪼갠 꼴이 유리 표준형이다.

# 정의

모닉 다항식 $f(x)=x^n+c\_{n-1}x^{n-1}+\cdots+c\_1x+c\_0$ 의 **동반행렬**은 다음 $n\times n$ 행렬이다.

$$
C(f)=\begin{pmatrix}0&0&\cdots&0&-c\_0\cr 1&0&\cdots&0&-c\_1\cr 0&1&\cdots&0&-c\_2\cr \vdots&\vdots&\ddots&\vdots&\vdots\cr 0&0&\cdots&1&-c\_{n-1}\end{pmatrix}
$$

대각 바로 아래가 모두 1 이고 마지막 열이 $f$ 의 계수를 부호 바꾸어 놓은 것이며 나머지는 0 이다.

$V$ 를 $k$ 위의 유한차원 [벡터 공간](vector-spaces.md), $T\colon V\to V$ 를 [선형사상](linear-maps.md)이라 하자. $T$ 의 **유리 표준형**은 $T$ 의 행렬이

$$
C(d\_1)\oplus C(d\_2)\oplus\cdots\oplus C(d\_k)
$$

가 되는 기저에서의 블록대각 행렬이다. 여기서 $d\_1,\dots,d\_k$ 는 $\deg d\_i\ge 1$ 이고 $d\_1\mid d\_2\mid\cdots\mid d\_k$ 인 모닉 다항식이다. 이 $d\_i$ 를 $T$ 의 **불변인자**라 한다. Frobenius 표준형이라고도 한다.

# 성질

## 존재와 유일성

*정리.* $k$ 가 체이고 $V$ 가 $k$ 위의 유한차원 벡터 공간이면, 각 선형사상 $T\colon V\to V$ 에 대해 유리 표준형을 주는 기저가 존재하고 불변인자의 열 $d\_1\mid\cdots\mid d\_k$ 는 유일하다[^1].

*증명의 요지.* $x\cdot v=Tv$ 로 $V$ 에 $k\lbrack x\rbrack$ [가군](modules.md) 구조를 준다. $\dim V$ 가 유한하므로 $V$ 는 유한생성 비틀림 가군이고, [PID 위의 유한생성 가군](finitely-generated-modules.md)(principal ideal domain)의 불변인자 분해가

$$
V\cong k\lbrack x\rbrack/(d\_1)\oplus\cdots\oplus k\lbrack x\rbrack/(d\_k)
$$

를 준다. $k\lbrack x\rbrack/(d)$ 에서 기저 $1,x,\dots,x^{\deg d-1}$ 을 잡으면 $x$ 를 곱하는 사상의 행렬이 $C(d)$ 다. 구조정리의 유일성이 불변인자의 유일성이다.

## 특성다항식과 최소다항식

| 불변량 | 불변인자로 |
| --- | --- |
| 특성다항식 | $d\_1d\_2\cdots d\_k$ |
| 최소다항식 | $d\_k$ |

블록 $C(d)$ 의 특성다항식과 최소다항식은 둘 다 $d$ 다. 최소다항식이 특성다항식을 나누므로 Cayley–Hamilton 정리가 따라 나온다. $k=1$ 인 경우, 곧 최소다항식과 특성다항식이 같은 경우를 순환 행렬이라 하고, 이때 유리 표준형은 동반행렬 하나다.

## 체 확대에 대한 불변성

*정리.* $K\supseteq k$ 가 체 확대이고 $A,B\in M\_n(k)$ 가 $M\_n(K)$ 에서 유사하면 $M\_n(k)$ 에서도 유사하다[^2].

*증명의 요지.* $xI-A$ 를 $k\lbrack x\rbrack$ 위의 행렬로 보고 Smith 표준형으로 옮기면 대각 성분이 $A$ 의 불변인자다. $d\_1\cdots d\_i$ 는 $xI-A$ 의 $i$ 차 [소행렬식](determinants.md)들의 최대공약수와 일치하고, 이 최대공약수 계산은 $k\lbrack x\rbrack$ 안에서 끝난다. 따라서 $K$ 로 올려 계산해도 같은 다항식이 나오고, 불변인자가 유사류를 결정하므로 두 유사류가 $k$ 에서 이미 같다.

Jordan 표준형으로는 이 진술을 얻을 수 없다. Jordan 블록의 대각 성분은 고윳값이므로 $k$ 밖으로 나갈 수 있다.

## Jordan 형과의 관계

$k$ 가 대수적으로 닫혀 있으면 각 $d\_i$ 가 일차식의 곱으로 쪼개진다. 서로소 인자별로 [중국인의 나머지 정리](chinese-remainder-theorem.md)를 쓰면

$$
k\lbrack x\rbrack/(d\_i)\cong\bigoplus\_j k\lbrack x\rbrack/((x-\lambda\_j)^{e\_{ij}})
$$

이고 오른쪽의 각 인자가 Jordan 블록 $J\_{e\_{ij}}(\lambda\_j)$ 다. 불변인자 분해를 초등인자 분해로 바꾸는 것이 유리 표준형에서 Jordan 형으로 옮기는 일이다. 두 분해가 같은 가군을 다르게 쪼갠 것이므로 블록 자료는 서로 번역된다.

## 유사 판정

$A,B\in M\_n(k)$ 가 유사할 필요충분조건은 불변인자의 열이 같은 것이다. [고윳값](eigenvalues.md) 문서가 드는 예, 특성다항식이 같아도 유사하지 않은 $N=\begin{pmatrix}0&1\cr 0&0\end{pmatrix}$ 과 영행렬은 불변인자가 각각 $(x^2)$ 과 $(x,x)$ 로 갈린다. 판정에 필요한 계산은 $xI-A$ 의 Smith 표준형이고, $k$ 의 사칙연산과 $k\lbrack x\rbrack$ 의 나눗셈만 쓴다.

# 활용

- Jordan 표준형이 요구하는 대수적 닫힘을 쓸 수 없는 자리를 유리 표준형이 메운다. $\mathbb Q$ 나 [유한체](finite-fields.md) 위의 행렬을 유사류로 분류하는 것이 그런 경우다.
- 고윳값의 유사 판정. 특성다항식만으로는 유사를 판정하지 못한다는 그 문서의 지적에 불변인자 목록이 답을 준다.
- PID 위의 유한생성 가군의 구조정리를 $R=k\lbrack x\rbrack$ 에서 읽은 결과가 유리 표준형이다. $R=\mathbb Z$ 에서 읽으면 유한생성 아벨군의 구조정리가 되므로 두 분류 정리가 같은 진술의 두 경우다.
- 동반행렬은 다항식의 근을 그 행렬의 고윳값으로 바꾼다. [Newton 법](newton-method.md)의 활용 절이 적는 다항식 근 계산이 이 변환을 쓴다.

[^1]: D. Dummit and R. Foote, *Abstract Algebra*, 3rd ed., Wiley, 2004, 12.2 절. 유리 표준형의 존재와 불변인자의 유일성을 가군 구조정리에서 끌어낸다.

[^2]: R. A. Horn and C. R. Johnson, *Matrix Analysis*, 2nd ed., Cambridge University Press, 2013, 3.3 절. Smith 표준형으로 불변인자를 계산하는 절차와 체 확대에 대한 불변성을 다룬다.

# 연관 문서

## 선수지식

- [Jordan 표준형](jordan-canonical-form.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algebra #ring_theory
