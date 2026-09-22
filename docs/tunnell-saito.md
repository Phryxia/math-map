# Tunnell–Saito 국소 부호 공식

# 개요

[Waldspurger 정리](waldspurger-formula.md)는 토릭 주기가 살아남는 사원수 대수가 어느 것인지를 $\varepsilon$ 인자가 결정한다고 말한다. 그 결정 규칙의 국소 성분이 **Tunnell–Saito 공식**이다.

국소체 $F$ 와 이차 확대 $K/F$ 와 $\mathrm{GL}\_2(F)$ 의 기약 표현 $\pi$ 를 놓자. 토러스 $K^\times$ 위에서 지표 $\chi$ 로 변환하는 범함수가 존재하는지 묻는다.

$$
\mathrm{Hom}\_{K^\times}\bigl(\pi,\chi\bigr)\ \ne\ 0\ ?
$$

답은 분열형 $\mathrm{GL}\_2(F)$ 와 분할 사원수 대수 $D^\times$ 를 함께 보아야 나온다. 두 군에서 $\mathrm{Hom}$ 공간의 차원의 합이 언제나 1 이고, 어느 쪽이 1 인지는 부호 하나가 지정한다.

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)=1\ \text{ on }\ \mathrm{GL}\_2(F)
\quad\Longleftrightarrow\quad
\varepsilon\negthinspace\left(\tfrac12,\pi_K\otimes\chi\right)\thinspace\eta(-1)=+1
$$

범함수의 존재라는 표현론적 질문이 $\varepsilon$ 인자의 부호라는 해석적 불변량으로 번역된다. [GGP 지표 공식](gan-gross-prasad.md)(Gan–Gross–Prasad)의 가장 낮은 경우이고, 역사적으로는 GGP 보다 먼저 발견되어 그 추측의 모양을 잡아 주었다.

Tunnell 은 이 공식으로 합동수 문제의 판정 알고리즘을 얻었다. 어떤 정수가 직각삼각형의 넓이가 될 수 있는지를 삼항 이차형식의 표현수를 세어 판정한다.

# 직관

## 부호와 내부형식

$K^\times$ 는 $\mathrm{GL}\_2(F)$ 안에서도 $D^\times$ 안에서도 극대 토러스로 실현된다. 두 군은 같은 $L$ 군을 갖는 내부형식이라 매개변수 수준에서는 구별되지 않는다. 그런데 표현 수준에서는 다르게 행동한다.

$D^\times$ 는 중심을 나누면 콤팩트하므로 기약 표현이 유한차원이고, 콤팩트 부분군 $K^\times/F^\times$ 위로 제한해 지표를 분해하는 일이 유한 계산이다. $\mathrm{GL}\_2(F)$ 쪽에서는 무한차원 표현을 다룬다. 두 계산의 답이 합쳐서 1 이라는 것은 두 군의 표현이 하나의 [Vogan 꾸러미](vogan-packets.md)를 이루고 그 꾸러미 위에서 중복도 1 이 성립한다는 뜻이다.

$\varepsilon$ 인자는 꾸러미 안에서 주소를 지정한다. $+1$ 이면 분열형, $-1$ 이면 비분열형이다.

## $\varepsilon$ 인자의 역할

$\varepsilon$ 인자는 국소 함수방정식에서 나오는 상수로, 국소 $L$ 함수와 $\gamma$ 인자를 이어 붙일 때 남는 비율이다. Fourier 변환을 두 번 하면 원래대로 돌아오므로 그 제곱이 통제되고, 자기쌍대 상황에서 $\varepsilon=\pm1$ 이 되어 전역에서 **함수방정식의 부호**로 나타난다.

같은 부호가 전역에서는 중심값이 강제로 0 인지를, 국소에서는 범함수가 어느 군에 있는지를 말한다. Waldspurger 정리가 두 진술을 한 문장으로 묶는 근거다.

# 정의

## 국소체 위의 이차 확대와 지표

$F$ 를 비아르키메데스 국소체, $K/F$ 를 이차 확대, $\eta_{K/F}$ 를 [유체론](class-field-theory.md)이 주는 이차 지표라 하자. $\pi$ 는 $\mathrm{GL}\_2(F)$ 의 무한차원 기약 표현이고 중심 지표가 $\omega_\pi$ 다. $\chi$ 는 $K^\times$ 의 지표로 $\chi|\_{F^\times}=\omega_\pi$ 를 만족한다고 가정한다.

$\pi$ 가 이산계열이면 Jacquet–Langlands 대응으로 $D^\times$ 의 유한차원 표현 $\pi'=\mathrm{JL}^{-1}(\pi)$ 가 있다. 이산계열이 아니면 $D^\times$ 쪽 상대가 없다.

## 정리 (Tunnell 1983, Saito 1993)

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)+\dim\mathrm{Hom}\_{K^\times}(\pi',\chi)=1
$$

이고, 각 항은 다음으로 결정된다.

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)=
\begin{cases}
1,&\varepsilon\negthinspace\left(\tfrac12,\pi_K\otimes\chi\right)\eta_{K/F}(-1)=+1\cr
0,&\text{그 외}
\end{cases}
$$

여기서 $\pi_K$ 는 $\pi$ 의 $K$ 로의 기저변환이고, $\varepsilon$ 는 고정된 가법 지표에 대한 국소 $\varepsilon$ 인자다. $\pi$ 가 이산계열이 아니면 부호가 언제나 $+1$ 이라 $\mathrm{GL}\_2$ 쪽에 범함수가 있다.

## 증명의 요령

Saito 의 증명이 개념적으로 가장 깔끔하다. 양쪽 $\mathrm{Hom}$ 공간의 차원을 지표의 적분으로 적으면

$$
\dim\mathrm{Hom}\_{K^\times}(\pi,\chi)
=\int_{K^\times/F^\times}\Theta_\pi(t)\thinspace\chi^{-1}(t)\thinspace dt
$$

꼴이 되고(적분은 정칙화가 필요하다), [Jacquet–Langlands 대응](jacquet-langlands.md)의 지표 항등식 $\Theta_{\pi'}=-\Theta_\pi$ 가 두 적분의 합을 상수로 만든다. 그 상수가 1 이라는 것이 정리의 내용이고, 부호를 $\varepsilon$ 로 동정하는 부분에 국소 함수방정식이 들어간다.

# 성질

## 비분기 경우의 그림

$\pi$ 가 비분기 주계열이고 $K/F$ 가 불분기이면 $\varepsilon=+1$ 이 되어 언제나 $\mathrm{GL}\_2$ 쪽에 범함수가 있고 $D^\times$ 쪽은 0 이다. 전역 문제에서 유한 개의 나쁜 자리만 따지면 되므로 Waldspurger 정리의 분지 집합 $\Sigma$ 가 유한하다.

## 무한 자리

$F=\mathbb R$ 이고 $K=\mathbb C$ 인 경우도 같은 형태다. 무게 $2k$ 의 이산계열과 지표 $\chi$ 의 무게를 비교해 부호가 정해지고, 부호가 $-1$ 이면 콤팩트형 $\mathbb H^\times$ 쪽에 범함수가 있다. 확정 사원수 대수가 쓰이는 상황이 이것이다.

## Tunnell 의 합동수 판정

$n$ 이 **합동수**라는 것은 세 변이 유리수인 직각삼각형의 넓이가 $n$ 이라는 뜻이고, 타원곡선 $E_n:y^2=x^3-n^2x$ 의 계수가 양수라는 것과 동치다. Tunnell 은 자신의 국소 공식으로 $L(E_n,1)$ 의 값을 삼항 이차형식의 표현수로 적었다.

> $n$ 이 홀수 무제곱수일 때, $n$ 이 합동수이면 다음이 성립한다.
> $$2\thinspace\char35{}\lbrace(x,y,z)\in\mathbb Z^3: n=2x^2+y^2+32z^2\rbrace=\char35{}\lbrace(x,y,z)\in\mathbb Z^3: n=2x^2+y^2+8z^2\rbrace$$
> BSD(Birch–Swinnerton-Dyer) 추측을 가정하면 역도 성립한다.

짝수 $n=2m$ 에서는 $4x^2+y^2+32z^2$ 과 $4x^2+y^2+8z^2$ 을 쓴다. 판정이 유한 계산으로 끝난다.

```javascript
// a x^2 + b y^2 + c z^2 = n 의 정수해 개수
function count(n, a, b, c) {
  let t = 0
  const X = Math.floor(Math.sqrt(n / a)), Z = Math.floor(Math.sqrt(n / c))
  for (let x = -X; x <= X; x++) for (let z = -Z; z <= Z; z++) {
    const r = n - a * x * x - c * z * z
    if (r < 0) continue
    const y = Math.round(Math.sqrt(r / b))
    for (const yy of [y - 1, y, y + 1]) if (b * yy * yy === r) { t += yy === 0 ? 1 : 2; break }
  }
  return t
}

// Tunnell 판정 (BSD 를 가정하면 필요충분)
function tunnell(n) {
  if (n % 2 === 1) return 2 * count(n, 2, 1, 32) === count(n, 2, 1, 8)
  const m = n / 2
  return 2 * count(m, 4, 1, 32) === count(m, 4, 1, 8)
}
```

$5,6,7$ 이 합동수이고 $1,2,3$ 이 아니라는 고전적 사실이 나온다. $1$ 이 합동수가 아니라는 것은 Fermat 이 무한강하법으로 증명한 명제이며, 그가 다룬 $x^4-y^4=z^2$ 의 불가능성과 같은 진술이다.

## 국소에서 전역으로

Tunnell 판정은 네 단계로 이루어진다. 국소 부호 공식이 각 자리에서 범함수의 존재를 결정하고, Waldspurger 정리가 그 국소 정보를 전역 주기의 비소멸로 묶고, 주기가 중심값 $L(E_n,1)$ 을 주며, 그 중심값을 반정수 무게 형식([Shimura 대응](shimura-correspondence.md))의 계수로 적으면 삼항 이차형식의 표현수가 된다.

# 활용

## GGP 지표 공식의 원형

Gan–Gross–Prasad 가 고전군 전반의 지표 공식을 제안할 때 본보기로 삼은 것이 이 정리다. $\mathrm{Hom}$ 공간의 차원 합이 1 이라는 것, 어느 내부형식인지를 $\varepsilon$ 이 결정한다는 것, 부호가 국소 함수방정식에서 온다는 것이 그대로 일반화되었다.

## 주기의 사전 판정

각 자리에서 부호를 계산하면 전역 주기가 어느 사원수 대수 위에서 0 이 아닐 수 있는지 미리 안다. 계산이 유한하고 국소적이라 값싸며, 잘못된 군 위에서 계산하는 일을 막는다.

## 이차 뒤틀림 족의 조직

$\chi$ 를 움직일 때 부호가 변하는 방식이 뒤틀림 족에서 계수가 짝수인 곡선과 홀수인 곡선의 분포를 준다. 합동수 문제에서 $n\equiv5,6,7\ (\mathrm{mod}\ 8)$ 이면 부호가 $-1$ 이라 $L(E_n,1)=0$ 이 강제되므로, BSD 를 가정하면 그런 $n$ 은 모두 합동수다. 국소 계산만으로 무한히 많은 $n$ 의 답을 얻는다.

# 연관 문서

## 선수지식

- [Waldspurger 정리와 토릭 주기](waldspurger-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #computation
