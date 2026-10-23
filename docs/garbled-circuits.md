# 뒤섞인 회로

# 개요

**뒤섞인 회로(garbled circuit)** 는 불 회로의 각 선에 비트 대신 무작위 키를 대응시키고 각 게이트를 키의 암호화 표로 바꿔, 키를 받은 사람이 회로를 계산해 출력을 얻되 중간 선의 비트는 알 수 없게 만든 것이다. Yao 가 두 사람의 [다자간 계산](secure-multiparty-computation.md)을 위해 만들었다[^1].

한 사람이 회로를 뒤섞어 보내고, 다른 사람이 자기 입력에 해당하는 키를 [망각 전송](oblivious-transfer.md)으로 받아 회로를 계산한다. 회로의 깊이와 무관하게 상수 번의 메시지로 끝난다.

# 직관

앨리스와 밥이 각자 비트 $x$, $y$ 를 가지고 $x\wedge y$ 만 알고 싶다. 앨리스는 선 $a$, $b$, $c$ 마다 무작위 키 두 개 $k\_a^0,k\_a^1$, $k\_b^0,k\_b^1$, $k\_c^0,k\_c^1$ 을 고른다. 위첨자는 그 선의 비트다. 앨리스는 $(u,v)$ 네 쌍마다 $k\_c^{u\wedge v}$ 를 두 키 $k\_a^u$, $k\_b^v$ 로 암호화한 값 네 개를 순서를 섞어 밥에게 보낸다.

밥에게는 $k\_a^x$ 와 $k\_b^y$ 가 있어야 한다. 앨리스는 $k\_a^x$ 를 그대로 보낸다. 키는 무작위 문자열이므로 밥은 그것이 $0$ 의 키인지 $1$ 의 키인지 모른다. $k\_b^y$ 는 앨리스가 $k\_b^0,k\_b^1$ 을 넣고 밥이 $y$ 를 넣는 망각 전송으로 받는다. 앨리스는 $y$ 를 모르고 밥은 $k\_b^{1-y}$ 를 모른다.

밥은 가진 두 키로 네 암호문 가운데 하나만 풀어 $k\_c^{x\wedge y}$ 를 얻는다. 앨리스가 $k\_c^0\mapsto 0$, $k\_c^1\mapsto 1$ 의 대응을 알려 주면 밥은 출력 비트를 얻는다. 게이트가 여럿이면 한 게이트의 출력 키가 다음 게이트의 입력 키가 된다.

# 정의

## 뒤섞기 방식

**뒤섞기 방식(garbling scheme)** 은 알고리즘 넷 $(\mathrm{Gb},\mathrm{En},\mathrm{Ev},\mathrm{De})$ 이다[^2].

1. $\mathrm{Gb}(1^n,C)$ 가 회로 $C$ 로부터 뒤섞인 회로 $F$, 입력 부호화 정보 $e$, 출력 복호 정보 $d$ 를 낸다.
2. $\mathrm{En}(e,x)$ 가 입력 $x$ 의 키 묶음 $X$ 를 낸다.
3. $\mathrm{Ev}(F,X)$ 가 출력 키 묶음 $Y$ 를 낸다.
4. $\mathrm{De}(d,Y)$ 가 $C(x)$ 를 낸다.

**비밀성(privacy).** 다항시간 시뮬레이터 $S$ 가 존재해, 회로의 모양과 $C(x)$ 만 받고 만든 $S(C(x))$ 의 분포가 $(F,X,d)$ 의 분포와 계산적으로 구별되지 않는다.

## Yao 프로토콜

앨리스가 $(F,e,d)\leftarrow\mathrm{Gb}(1^n,C)$ 를 만들어 $F$, $d$ 와 자기 입력의 키를 밥에게 보낸다. 밥의 입력 비트마다 두 사람이 망각 전송을 한 번 해서 밥이 자기 입력의 키를 받는다. 밥은 $\mathrm{Ev}$ 와 $\mathrm{De}$ 로 $C(x,y)$ 를 계산한다.

# 성질

## 반정직 안전성

뒤섞기 방식이 비밀성을 가지고 망각 전송이 안전하면, Yao 프로토콜은 반정직 공격자에 대해 $C$ 를 안전하게 계산한다[^3].

증명의 요지. 밥의 관점은 $(F,X,d)$ 와 망각 전송의 기록이다. 망각 전송의 시뮬레이터로 기록을 만들고, 뒤섞기의 시뮬레이터 $S$ 에 $C(x,y)$ 를 넣어 $(F,X,d)$ 를 만든다. 앨리스의 관점은 망각 전송의 기록뿐이고, 망각 전송의 안전성으로 시뮬레이션된다.

## 게이트당 비용

- 점과 순열(point-and-permute). 키마다 무작위 표시 비트를 붙여 표의 행 번호로 쓰면, 계산하는 사람이 네 행을 모두 풀어 보지 않고 한 행만 푼다[^4].
- 무비용 XOR(free XOR, XOR 은 exclusive or). 모든 선에서 $k^1=k^0\oplus\Delta$ 로 같은 $\Delta$ 를 쓰면 XOR 게이트의 출력 키는 입력 키의 배타적 논리합이고 표가 필요 없다[^5].
- 반쪽 게이트(half-gates). AND(논리곱) 게이트를 두 반쪽으로 나눠 게이트당 암호문 둘로 뒤섞는다[^6]. 같은 논문은 선형 연산만 쓰는 뒤섞기 방식에서 AND 게이트에 암호문 둘이 필요함도 보였다.

## 악의적 공격자

앨리스가 다른 회로를 뒤섞어 보내면 밥은 알아채지 못한다. 앨리스가 뒤섞인 회로를 여러 개 만들고, 밥이 무작위로 고른 일부를 열어 올바른지 확인한 뒤 나머지로 계산하는 잘라 고르기(cut-and-choose)로 이를 막는다. 앨리스의 입력이 모든 회로에서 같다는 것은 [약속 방식](commitment-schemes.md)으로 묶는다.

# 활용

- 두 사람 계산. 두 기관이 입력을 감춘 채 비교, 교집합, 통계, 기계학습 추론을 계산한다. 회로의 크기에 비례하는 통신으로 상수 번의 메시지에 끝난다.
- 백만장자 문제. 두 사람이 재산을 밝히지 않고 누가 더 부자인지 아는 문제를 Yao 가 처음 제기했고[^7], 비교 회로를 뒤섞어 푼다.
- 일회용 프로그램. 뒤섞인 회로는 입력 하나에 대해서만 안전하므로, 입력 키를 한 번만 내주는 장치와 묶으면 한 번만 실행되는 프로그램이 된다.

[^1]: A. C. Yao, "How to generate and exchange secrets", FOCS 1986, 162–167.
[^2]: M. Bellare, V. T. Hoang, P. Rogaway, "Foundations of garbled circuits", ACM CCS 2012, 784–796.
[^3]: Y. Lindell, B. Pinkas, "A proof of security of Yao's protocol for two-party computation", Journal of Cryptology 22 (2009), 161–188.
[^4]: D. Beaver, S. Micali, P. Rogaway, "The round complexity of secure protocols", STOC 1990, 503–513.
[^5]: V. Kolesnikov, T. Schneider, "Improved garbled circuit: free XOR gates and applications", ICALP 2008, LNCS 5126, 486–498.
[^6]: S. Zahur, M. Rosulek, D. Evans, "Two halves make a whole: reducing data transfer in garbled circuits using half gates", EUROCRYPT 2015, LNCS 9057, 220–250.
[^7]: A. C. Yao, "Protocols for secure computations", FOCS 1982, 160–164.

# 연관 문서

## 선수지식

- [다자간 계산](secure-multiparty-computation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#cryptography #complexity
